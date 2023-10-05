/**
 * https://developer.android.com/reference/android/content/pm/PackageManager
 */
declare interface android_content_pm_PackageManager extends java_lang_Object {
    getPackageInfo(packageName: rhino_string, flags: java_int): android_content_pm_PackageInfo;
    getPackageInfo(packageName: rhino_string, flags: PackageManager.PackageInfoFlags): android_content_pm_PackageInfo;
    getPackageInfo(versionedPackage: android_content_pm_VersionedPackage, flags: PackageManager.PackageInfoFlags): android_content_pm_PackageInfo;
    getPackageInfo(versionedPackage: android_content_pm_VersionedPackage, flags: java_int): android_content_pm_PackageInfo;
}
