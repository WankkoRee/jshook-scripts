/**
 * 用于获取当前hook应用的基本信息
 */
declare const app: {
    /**
     * 判断 App 是否有 root 权限
     */
    isAppRoot: () => java_boolean,
    /**
     * 判断 App 是否是系统应用
     */
    isAppSystem: () => java_boolean,
    /**
     * 判断 App 是否处于前台
     */
    isAppForeground: () => java_boolean,
    /**
     * 关闭应用
     */
    exitApp: () => void,
    /**
     * 获取 App 信息
     */
    getAppInfo: () => android_content_pm_ApplicationInfo,
    /**
     * 打开指定网址
     * @param url string 网址
     */
    openUrl: (url: rhino_string) => void,
    /**
     * 启动 Activity
     * @param activity Activity
     */
    startActivity: (activity: android_app_Activity) => void,
    /**
     * 获取 Activity 栈链表
     */
    getActivityList: () => android_app_Activity[],
    /**
     * 结束 Activity
     * @param activity Activity
     */
    finishActivity: (activity: android_app_Activity) => void,
    /**
     * 结束到指定 Activity
     * @param activity Activity
     */
    finishToActivity: (activity: android_app_Activity) => void,
    /**
     * 回到桌面
     */
    startHomeActivity: () => void,
    /**
     * dp转px
     */
    dpToPx: (value: java_float) => java_int,
    /**
     * px转dp
     */
    pxToDp: (value: java_float) => java_int,
    /**
     * 获取内存应用数据路径
     */
    getInternalAppDataPath: () => java_lang_String,
    /**
     * 获取外存应用数据路径
     */
    getExternalAppDataPath: () => java_lang_String,
    /**
     * 获取外存应用 OBB 路径
     */
    getExternalAppObbPath: () => java_lang_String,
    /**
     * 获取外存路径
     */
    getExternalStoragePath: () => java_lang_String,
};
