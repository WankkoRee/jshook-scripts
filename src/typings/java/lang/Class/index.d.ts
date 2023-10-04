/**
 * https://developer.android.com/reference/java/lang/Class
 */
declare interface java_lang_Class extends java_lang_Object {
    /**
     * 完整的包路径
     */
    getPackageName: () => java_lang_String,
    /**
     * JVM中的名字
     */
    getName: () => java_lang_String,
    /**
     * 类名
     */
    getSimpleName: () => java_lang_String,
    /**
     * 完整的包路径和类名, 与 {@link getTypeName} 类似, 但是在处理匿名内部类时返回`"null"`
     */
    getCanonicalName: () => java_lang_String,
    /**
     * 完整的包路径和类名, 与 {@link getCanonicalName} 类似, 并且能够完善处理内部类的各种情况
     */
    getTypeName: () => java_lang_String,
}
