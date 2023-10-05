import {java_lang_Integer} from "@/typings/java/lang/Integer/class";
import {java_lang_Boolean} from "@/typings/java/lang/Boolean/class";

const packageName = "com.wangc.bill";

(() => {
    if (!runtime.packageName.equals(packageName)) {
        console.error(`不是目标应用: ${runtime.packageName}`);
        return;
    }

    XposedBridge.hookAllMethods(XposedHelpers.findClass(`${packageName}.application.MyApplication`, runtime.classLoader), "onCreate", XC_MethodHook({
        beforeHookedMethod: function (param) {
            const application = param.thisObject!;
            const context = application.getApplicationContext();
            const packageManager = context.getPackageManager();
            const packageName = context.getPackageName();
            const packageInfo = packageManager.getPackageInfo(packageName, 0);

            const test: java_lang_Throwable

            switch (packageInfo.versionCode) {
                case 244: {
                    // XposedBridge.hookAllConstructors(XposedHelpers.findClass(`${packageName}.http.entity.User`, runtime.classLoader), XC_MethodHook({
                    //     afterHookedMethod: function (param) {
                    //         XposedHelpers.setObjectField(param.thisObject, 'vipType', 2);
                    //     }
                    // }));
                    // XposedBridge.hookAllMethods(XposedHelpers.findClass(`${packageName}.http.entity.User`, runtime.classLoader), "setVipType", XC_MethodHook({
                    //     afterHookedMethod: function (param) {
                    //         XposedHelpers.setObjectField(param.thisObject, 'vipType', 2);
                    //     }
                    // }));
                    XposedBridge.hookAllMethods(XposedHelpers.findClass(`${packageName}.http.entity.User`, runtime.classLoader), "isVip", XC_MethodHook({
                        afterHookedMethod: function (param) {
                            param.setResult(new java_lang_Boolean(true));
                        }
                    }));
                    XposedBridge.hookAllMethods(XposedHelpers.findClass(`${packageName}.http.entity.User`, runtime.classLoader), "getVipType", XC_MethodHook({
                        afterHookedMethod: function (param) {
                            param.setResult(new java_lang_Integer(2));
                        }
                    }));
                }
                break;
                default: {
                    console.warn(`目标应用版本未验证, 脚本可能无效: ${packageInfo.versionName}[${packageInfo.versionCode}]`);
                }
                break;
            }
        },
    }));
})();
