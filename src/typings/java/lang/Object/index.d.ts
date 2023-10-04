/**
 * Class `Object` is the root of the class hierarchy.
 * Every class has `Object` as a superclass.
 * All objects, including arrays, implement the methods of this class.
 *
 * https://developer.android.com/reference/java/lang/Object
 */
declare interface java_lang_Object {
    equals: (obj: java_lang_Object) => boolean;
    getClass: () => java_lang_Class;
    hashcode: () => number;
    toString: () => java_lang_String;
}
