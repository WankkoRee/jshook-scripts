/**
 * 用于获取当前hook运行时相关基础信息
 */
declare const runtime: {
    /**
     * 获取当前注入的脚本内容，注意，如果是加密脚本，获取的不会是解密后的文本
     */
    jsContent: string,
    appInfo: unknown, // ApplicationInfo,
    packageName: string,
    classLoader: unknown, // ClassLoader,
    isFirstApplication: boolean,
    /**
     * 获取当前jshook的版本号
     */
    coreVersionCode: number,
    /**
     * 获取当前注入的类型(1:rhino 2:frida)
     */
    coreType: CoreTypeN,
};
