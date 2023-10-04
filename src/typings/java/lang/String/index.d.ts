/**
 * https://developer.android.com/reference/java/lang/String
 */
declare interface java_lang_String extends java_lang_Object {
    equals: (str: java_lang_Object | rhino_string) => boolean;
    length: () => number,
}
