import {java_lang_Integer} from "@/typings/java/lang/Integer/class";
import {java_lang_Long} from "@/typings/java/lang/Long/class";

const packageName = "com.wangc.bill";

(() => {
    if (!runtime.packageName.equals(packageName)) {
        console.error(`不是目标应用: ${runtime.packageName}`);
        return;
    }

    XposedBridge.hookAllMethods(XposedHelpers.findClass(`${packageName}.application.MyApplication`, runtime.classLoader), "onCreate", XC_MethodHook<android_app_Application, void>({
        beforeHookedMethod: function (param) {
            const application = param.thisObject;
            const context = application.getApplicationContext();
            const packageManager = context.getPackageManager();
            const packageName = context.getPackageName();
            const packageInfo = packageManager.getPackageInfo(packageName, 0);

            switch (packageInfo.getLongVersionCode()) {
                default: {
                    console.warn(`目标应用版本未验证, 脚本可能无效: ${packageInfo.versionName}[${packageInfo.versionCode}]`);
                }
                case 251:
                case 250:
                case 249:
                case 248:
                case 247:
                case 246:
                // case 245: // 无此版本
                case 244: {
                    let vipType = new java_lang_Integer(-1);
                    let vipTime = new java_lang_Long(0);

                    XposedBridge.hookAllMethods(XposedHelpers.findClass(`${packageName}.http.protocol.CommonBaseJson`, runtime.classLoader), "getResult", XC_MethodHook({
                        afterHookedMethod: function (param) {
                            const resp = param.getResult()!;
                            if (resp.getClass().getTypeName().equals(`${packageName}.http.entity.User`)) {
                                vipType = XposedHelpers.getObjectField(resp, 'vipType');
                                vipTime = XposedHelpers.getObjectField(resp, 'vipTime');
                                if (vipType.equals(new java_lang_Integer(0)) || vipType.equals(new java_lang_Integer(1)) && vipTime < new java_lang_Long(new Date().valueOf())) {
                                    XposedHelpers.setObjectField(resp, 'vipType', new java_lang_Integer(2));
                                    console.log("拦截网络响应, 设置为假永久会员");
                                } else {
                                    console.log("已是会员, 不作设置");
                                }
                            }
                        },
                    }));

                    const interruptCheck = XC_MethodHook({
                        beforeHookedMethod: function (param) {
                            if (vipType.equals(new java_lang_Integer(-1))) { // 初始化时过检测
                                param.setResult(null);
                            } else if (vipType.equals(new java_lang_Integer(0)) || vipType.equals(new java_lang_Integer(1)) && vipTime < new java_lang_Long(new Date().valueOf())) {
                                param.setResult(null);
                                console.log("拦截网络响应, 假永久会员时不使用联网功能");
                            }
                        },
                    })
                    XposedBridge.hookAllMethods(XposedHelpers.findClass(`${packageName}.http.HttpManager`, runtime.classLoader), 'getOcrToken', interruptCheck);
                    XposedBridge.hookAllMethods(XposedHelpers.findClass(`${packageName}.http.HttpManager`, runtime.classLoader), 'getSpeechToken', interruptCheck);
                }
                break;
            }
        },
    }));
})();
