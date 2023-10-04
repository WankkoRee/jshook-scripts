/**
 * 用于获取当前hook运行时相关基础信息
 */
declare const runtime: {
    /**
     * 获取当前注入的脚本内容，注意，如果是加密脚本，获取的不会是解密后的文本
     */
    jsContent: java_lang_String,
    appInfo: android_content_pm_ApplicationInfo,
    packageName: java_lang_String,
    classLoader: java_lang_ClassLoader,
    isFirstApplication: java_boolean,
    /**
     * 获取当前jshook的版本号
     */
    coreVersionCode: java_int,
    /**
     * 获取当前注入的类型(1:rhino 2:frida)
     */
    coreType: import("@/typings/main/enum").CoreTypeN,
};
