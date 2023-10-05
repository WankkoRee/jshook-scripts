/**
 * https://api.xposed.info/reference/de/robv/android/xposed/XposedHelpers.html
 */
declare class XposedHelpers implements java_lang_Object {
    /**
     * Thrown when a class loader is unable to find a class.
     */
    static ClassNotFoundError = class {
    }
    /**
     * This class provides a wrapper for an exception thrown by a method invocation.
     */
    static InvocationTargetError = class {
    }

    /**
     * Loads an asset from a resource object and returns the content as `byte` array.
     *
     * @param res The resources from which the asset should be loaded.
     * @param path The path to the asset, as in {@link http://developer.android.com/reference/android/content/res/AssetManager.html#open(java.lang.String) AssetManager.open(String)}.
     * @returns The content of the asset.
     * @throws IOException http://developer.android.com/reference/java/io/IOException.html
     */
    static assetAsByteArray(res: android_content_res_Resources, path: rhino_string): java_byte[];
    /**
     * Calls an instance or static method of the given object.
     * See {@link callMethod callMethod(Object, String, Object...)}.
     *
     * This variant allows you to specify parameter types, which can help in case there are multiple methods with the same name, especially if you call it with `null` parameters.
     */
    static callMethod(obj: java_lang_Object, methodName: rhino_string, parameterTypes: java_lang_Class[], ...args: java_lang_Object): java_lang_Object;
    /**
     * Calls an instance or static method of the given object.
     * The method is resolved using {@link findMethodBestMatch findMethodBestMatch(Class, String, Object...)}.
     *
     * @param obj The object instance. A class reference is not sufficient!
     * @param methodName The method name.
     * @param args The arguments for the method call.
     * @throws NoSuchMethodError {@link http://developer.android.com/reference/java/lang/NoSuchMethodError.html NoSuchMethodError}
     * In case no suitable method was found.
     * @throws XposedHelpers.InvocationTargetError
     * In case an exception was thrown by the invoked method.
     */
    static callMethod(obj: java_lang_Object, methodName: rhino_string, ...args: java_lang_Object): java_lang_Object;
    /**
     * Calls a static method of the given class.
     * See {@link callStaticMethod callStaticMethod(Class, String, Object...)}.
     *
     * This variant allows you to specify parameter types, which can help in case there are multiple methods with the same name, especially if you call it with `null` parameters.
     */
    static callStaticMethod(clazz: java_lang_Class, methodName: rhino_string, parameterTypes: java_lang_Class[], ...args: java_lang_Object): java_lang_Object;
    /**
     * Calls a static method of the given class.
     * The method is resolved using {@link findMethodBestMatch findMethodBestMatch(Class, String, Object...)}.
     *
     * @param clazz The class reference.
     * @param methodName The method name.
     * @param args The arguments for the method call.
     * @throws NoSuchMethodError {@link http://developer.android.com/reference/java/lang/NoSuchMethodError.html NoSuchMethodError}
     * In case no suitable method was found.
     * @throws XposedHelpers.InvocationTargetError
     * In case an exception was thrown by the invoked method.
     */
    static callStaticMethod(clazz: java_lang_Class, methodName: rhino_string, ...args: java_lang_Object): java_lang_Object;
    /**
     * Decrements the depth counter for the given method.
     * See {@link incrementMethodDepth incrementMethodDepth(String)} for details.
     *
     * @param method The method name. Should be prefixed with a unique, module-specific string.
     * @returns The updated depth.
     */
    static decrementMethodDepth(method: rhino_string): java_int;
    /**
     * Look up a constructor and hook it.
     * See {@link findAndHookMethod findAndHookMethod(String, ClassLoader, String, Object...)} for details.
     */
    static findAndHookConstructor(clazz: java_lang_Class, ...parameterTypesAndCallback: java_lang_Object): typeof XC_MethodHook.Unhook.prototype;
    /**
     * Look up a constructor and hook it.
     * See {@link findAndHookMethod findAndHookMethod(String, ClassLoader, String, Object...)} for details.
     */
    static findAndHookConstructor(className: rhino_string, classLoader: java_lang_ClassLoader, ...parameterTypesAndCallback: java_lang_Object): typeof XC_MethodHook.Unhook.prototype;
    /**
     * Look up a method and hook it.
     * See {@link findAndHookMethod findAndHookMethod(String, ClassLoader, String, Object...)} for details.
     */
    static findAndHookMethod(clazz: java_lang_Class, methodName: rhino_string, ...parameterTypesAndCallback: java_lang_Object): typeof XC_MethodHook.Unhook.prototype;
    /**
     * Look up a method and hook it.
     * The last argument must be the callback for the hook.
     *
     * This combines calls to {@link findMethodExact findMethodExact(Class, String, Object...)} and {@link XposedBridge.hookMethod XposedBridge.hookMethod(Member, XC_MethodHook)}.
     *
     * There are two ways to specify the parameter types.
     * If you already have a reference to the {@link http://developer.android.com/reference/java/lang/Class.html Class}, use that.
     * For Android framework classes, you can often use something like `String.class`.
     * If you don't have the class reference, you can simply use the full class name as a string, e.g. `java.lang.String` or `com.example.MyClass`.
     * It will be passed to {@link findClass findClass(String, ClassLoader)} with the same class loader that is used for the target method, see its documentation for the allowed notations.
     *
     * Primitive types, such as `int`, can be specified using `int.class` (recommended) or `Integer.TYPE`.
     * Note that `Integer.class` doesn't refer to `int` but to `Integer`, which is a normal class (boxed primitive).
     * Therefore it must not be used when the method expects an `int` parameter - it has to be used for `Integer` parameters though, so check the method signature in detail.
     *
     * As last argument to this method (after the list of target method parameters), you need to specify the callback that should be executed when the method is invoked.
     * It's usually an anonymous subclass of {@link XC_MethodHook XC_MethodHook} or {@link XC_MethodReplacement XC_MethodReplacement}.
     *
     * @remarks
     * **!!!Danger!!!**
     *
     * The method must be declared or overridden in the given class, inherited methods are not considered!
     * That's because each method implementation exists only once in the memory, and when classes inherit it, they just get another reference to the implementation.
     * Hooking a method therefore applies to all classes inheriting the same implementation.
     * You have to expect that the hook applies to subclasses (unless they override the method), but you shouldn't have to worry about hooks applying to superclasses, hence this "limitation".
     * There could be undesired or even dangerous hooks otherwise, e.g. if you hook `SomeClass.equals()` and that class doesn't override the `equals()` on some ROMs, making you hook `Object.equals()` instead.
     *
     * @example
     * ```
     *  // In order to hook this method ...
     *  package com.example;
     *  public class SomeClass {
     *    public int doSomething(String s, int i, MyClass m) {
     *      ...
     *    }
     *  }
     *
     *  // ... you can use this call:
     *  findAndHookMethod("com.example.SomeClass", lpparam.classLoader, String.class, int.class, "com.example.MyClass", new XC_MethodHook() {
     *    @Override
     *    protected void beforeHookedMethod(MethodHookParam param) throws Throwable {
     *      String oldText = (String) param.args[0];
     *      Log.d("MyModule", oldText);
     *
     *      param.args[0] = "test";
     *      param.args[1] = 42; // auto-boxing is working here
     *      setBooleanField(param.args[2], "great", true);
     *
     *      // This would not work (as MyClass can't be resolved at compile time):
     *      //   MyClass myClass = (MyClass) param.args[2];
     *      //   myClass.great = true;
     *    }
     *  });
     *  ```
     *
     * @param className The name of the class which implements the method.
     * @param classLoader The class loader for resolving the target and parameter classes.
     * @param methodName The target method name.
     * @param parameterTypesAndCallback The parameter types of the target method, plus the callback.
     * @returns An object which can be used to remove the callback again.
     * @throws NoSuchMethodError {@link http://developer.android.com/reference/java/lang/NoSuchMethodError.html NoSuchMethodError}
     * In case no suitable method was found.
     * @throws XposedHelpers.ClassNotFoundError
     * In case the target class or one of the parameter types couldn't be resolved.
     */
    static findAndHookMethod(className: rhino_string, classLoader: java_lang_ClassLoader, methodName: rhino_string, ...parameterTypesAndCallback: java_lang_Object): typeof XC_MethodHook.Unhook.prototype;
    /**
     * Look up a class with the specified class loader.
     *
     * There are various allowed syntaxes for the class name, but it's recommended to use one of these:
     * - `java.lang.String`
     * - `java.lang.String[]` (array)
     * - `android.app.ActivityThread.ResourcesKey`
     * - `android.app.ActivityThread$ResourcesKey`
     *
     * @param className The class name in one of the formats mentioned above.
     * @param classLoader The class loader, or `null` for the boot class loader.
     * @returns A reference to the class.
     * @throws XposedHelpers.ClassNotFoundError
     * In case the class was not found.
     */
    static findClass(className: rhino_string, classLoader: java_lang_ClassLoader): java_lang_Class;
    /**
     * Look up and return a class if it exists. Like {@link findClass findClass(String, ClassLoader)}, but doesn't throw an exception if the class doesn't exist.
     * @param className The class name.
     * @param classLoader The class loader, or `null` for the boot class loader.
     * @returns A reference to the class, or `null` if it doesn't exist.
     */
    static findClassIfExists(className: rhino_string, classLoader: java_lang_ClassLoader): java_lang_Class | null;
    /**
     * Look up a constructor in a class and set it to accessible.
     *
     * See {@link findMethodBestMatch findMethodBestMatch(Class, String, Class...)} for details.
     * This variant determines the parameter types from the classes of the given objects.
     * For any item that is `null`, the type is taken from `parameterTypes` instead.
     */
    static findConstructorBestMatch(clazz: java_lang_Class, parameterTypes: java_lang_Class[], args: java_lang_Object[]): java_lang_reflect_Constructor;
    /**
     * Look up a constructor in a class and set it to accessible.
     *
     * See {@link findMethodBestMatch findMethodBestMatch(Class, String, Class...)} for details.
     * This variant determines the parameter types from the classes of the given objects.
     */
    static findConstructorBestMatch(clazz: java_lang_Class, ...args: java_lang_Object): java_lang_reflect_Constructor;
    /**
     * Look up a constructor in a class and set it to accessible.
     *
     * See {@link findMethodBestMatch findMethodBestMatch(Class, String, Class...)} for details.
     */
    static findConstructorBestMatch(clazz: java_lang_Class, ...parameterTypes: java_lang_Class): java_lang_reflect_Constructor;
    /**
     * Look up a constructor of a class and set it to accessible.
     * See {@link findMethodExact findMethodExact(String, ClassLoader, String, Object...)} for details.
     */
    static findConstructorExact(className: rhino_string, classLoader: java_lang_ClassLoader, ...parameterTypes: java_lang_Object): java_lang_reflect_Constructor;
    /**
     * Look up a constructor of a class and set it to accessible.
     * See {@link findMethodExact findMethodExact(String, ClassLoader, String, Object...)} for details.
     */
    static findConstructorExact(clazz: java_lang_Class, ...parameterTypes: java_lang_Class): java_lang_reflect_Constructor;
    /**
     * Look up a constructor of a class and set it to accessible.
     * See {@link findMethodExact findMethodExact(String, ClassLoader, String, Object...)} for details.
     */
    static findConstructorExact(clazz: java_lang_Class, ...parameterTypes: java_lang_Object): java_lang_reflect_Constructor;
    /**
     * Look up and return a constructor if it exists.
     * See {@link findMethodExact findMethodExact(String, ClassLoader, String, Object...)} for details.
     */
    static findConstructorExactIfExists(clazz: java_lang_Class, ...parameterTypes: java_lang_Object): java_lang_reflect_Constructor;
    /**
     * Look up and return a constructor if it exists.
     * See {@link findMethodExact findMethodExact(String, ClassLoader, String, Object...)} for details.
     */
    static findConstructorExactIfExists(className: rhino_string, classLoader: java_lang_ClassLoader, ...parameterTypes: java_lang_Object): java_lang_reflect_Constructor;
    /**
     * Look up a field in a class and set it to accessible.
     *
     * @param clazz The class which either declares or inherits the field.
     * @param fieldName The field name.
     * @returns A reference to the field.
     * @throws NoSuchFieldError {@link http://developer.android.com/reference/java/lang/NoSuchFieldError.html NoSuchFieldError}
     * In case the field was not found.
     */
    static findField(clazz: java_lang_Class, fieldName: rhino_string): java_lang_reflect_Field;
    /**
     * Look up and return a field if it exists.
     * Like {@link findField findField(Class, String)}, but doesn't throw an exception if the field doesn't exist.
     *
     * @param clazz The class which either declares or inherits the field.
     * @param fieldName The field name.
     * @returns A reference to the field, or `null` if it doesn't exist.
     */
    static findFieldIfExists(clazz: java_lang_Class, fieldName: rhino_string): java_lang_reflect_Field | null;
    /**
     * Returns the first field of the given type in a class.
     * Might be useful for Proguard'ed classes to identify fields with unique types.
     *
     * @param clazz The class which either declares or inherits the field.
     * @param type The type of the field.
     * @returns A reference to the first field of the given type.
     * @throws NoSuchFieldError {@link http://developer.android.com/reference/java/lang/NoSuchFieldError.html NoSuchFieldError}
     * In case no matching field was not found.
     */
    static findFirstFieldByExactType(clazz: java_lang_Class, type: java_lang_Class): java_lang_reflect_Field;
    /**
     * Look up a method in a class and set it to accessible.
     *
     * See {@link findMethodBestMatch findMethodBestMatch(Class, String, Class...)} for details.
     * This variant determines the parameter types from the classes of the given objects.
     * For any item that is `null`, the type is taken from `parameterTypes` instead.
     */
    static findMethodBestMatch(clazz: java_lang_Class, methodName: rhino_string, parameterTypes: java_lang_Class[], args: java_lang_Object[]): java_lang_reflect_Method;
    /**
     * Look up a method in a class and set it to accessible.
     *
     * See {@link findMethodBestMatch findMethodBestMatch(Class, String, Class...)} for details.
     * This variant determines the parameter types from the classes of the given objects.
     */
    static findMethodBestMatch(clazz: java_lang_Class, methodName: rhino_string, ...args: java_lang_Object): java_lang_reflect_Method;
    /**
     * Look up a method in a class and set it to accessible.
     *
     * This does'nt only look for exact matches, but for the best match.
     * All considered candidates must be compatible with the given parameter types, i.e. the parameters must be assignable to the method's formal parameters.
     * Inherited methods are considered here.
     *
     * @param clazz The class which declares, inherits or overrides the method.
     * @param methodName The method name.
     * @param parameterTypes The types of the method's parameters.
     * @returns A reference to the best-matching method.
     * @throws NoSuchMethodError {@link http://developer.android.com/reference/java/lang/NoSuchMethodError.html NoSuchMethodError}
     * In case no suitable method was found.
     */
    static findMethodBestMatch(clazz: java_lang_Class, methodName: rhino_string, ...parameterTypes: java_lang_Class): java_lang_reflect_Method;
    // todo 未完成
}
