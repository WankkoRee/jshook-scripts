/**
 * 用于获取当前设备的基础信息
 */
declare const crypto: {
    /**
     * 判断设备是否 rooted
     */
    isDeviceRooted: () => java_boolean,
    /**
     * 判断设备 ADB 是否可用
     */
    isAdbEnabled: () => java_boolean,
    /**
     * 获取设备系统版本号
     */
    getSDKVersionName: () => java_lang_String,
    /**
     * 获取设备系统版本码
     */
    getSDKVersionCode: () => java_int,
    /**
     * 获取设备 AndroidID
     */
    getAndroidID: () => java_lang_String,
    /**
     * 获取设备 MAC 地址
     */
    getMacAddress: () => java_lang_String,
    /**
     * 获取设备厂商
     */
    getManufacturer: () => java_lang_String,
    /**
     * 获取设备型号
     */
    getModel: () => java_lang_String,
    /**
     * 获取设备 ABIs
     */
    getABIs: () => java_lang_String,
    /**
     * 判断是否是平板
     */
    isTablet: () => java_boolean,
    /**
     * 判断是否是模拟器
     */
    isEmulator: () => java_boolean,
    /**
     * 开发者选项是否打开
     */
    isDevelopmentSettingsEnabled: () => java_boolean,
    /**
     * 获取屏幕的宽度（单位：px）
     */
    getScreenWidth: () => java_int,
    /**
     * 获取屏幕的高度（单位：px）
     */
    getScreenHeight: () => java_int,
    /**
     * 获取应用屏幕的宽度（单位：px）
     */
    getAppScreenWidth: () => java_int,
    /**
     * 获取应用屏幕的高度（单位：px）
     */
    getAppScreenHeight: () => java_int,
    /**
     * 获取屏幕密度
     */
    getScreenDensity: () => java_float,
    /**
     * 获取屏幕密度 DPI
     */
    getScreenDensityDpi: () => java_int,
    /**
     * 判断是否横屏
     */
    isLandscape: () => java_boolean,
    /**
     * 判断是否竖屏
     */
    isPortrait: () => java_boolean,
    /**
     * 截屏
     */
    screenShot: (activity: android_app_Activity) => android_graphics_Bitmap,
    /**
     * 设置剪贴板内容
     */
    setClipboard: (data: rhino_string) => void,
    /**
     * 获取剪贴板内容
     */
    getClipboard: () => java_lang_String,
}
