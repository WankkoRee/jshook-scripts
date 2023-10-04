declare class XposedBridge {
    /**
     * The system class loader which can be used to locate Android framework classes.
     * Application classes cannot be retrieved from it.
     */
    static BOOTCLASSLOADER: ClassLoader;
    /**
     * @deprecated
     * This field was deprecated in API level 65.
     * Use {@link getXposedVersion getXposedVersion()} instead.
     */
    static XPOSED_BRIDGE_VERSION: number;
    /**
     * Returns the currently installed version of the Xposed framework.
     */
    static getXposedVersion: () => number;
    /**
     * Hook all constructors of the specified class.
     *
     * @param hookClass The class to check for constructors.
     * @param callback The callback to be executed when the hooked constructors are called.
     * @returns unhooks A set containing one object for each found constructor which can be used to unhook it.
     */
    static hookAllConstructors: (hookClass: Class, callback: XC_MethodHook) => Set<XC_MethodHook.Unhook>;
    /**
     * Hooks all methods with a certain name that were declared in the specified class.
     * Inherited methods and constructors are not considered. For constructors, use {@link hookAllConstructors hookAllConstructors(Class, XC_MethodHook)} instead.
     *
     * @param hookClass The class to check for declared methods.
     * @param methodName The name of the method(s) to hook.
     * @param callback The callback to be executed when the hooked methods are called.
     * @returns unhooks A set containing one object for each found method which can be used to unhook it.
     */
    static hookAllMethods: (hookClass: Class, methodName: string, callback: XC_MethodHook) => Set<XC_MethodHook.Unhook>;
    /**
     * Hook any method (or constructor) with the specified callback.
     * See below for some wrappers that make it easier to find a method/constructor in one step.
     *
     * @param hookMethod The method to be hooked.
     * @param callback The callback to be executed when the hooked method is called.
     * @returns unhooks An object that can be used to remove the hook.
     */
    static hookMethod: (hookMethod: Member, callback: XC_MethodHook) => Set<XC_MethodHook.Unhook>;
    /**
     * Basically the same as {@link http://developer.android.com/reference/java/lang/reflect/Method.html#invoke(java.lang.Object,%20java.lang.Object...) Method.invoke(Object, Object...)}, but calls the original method as it was before the interception by Xposed.
     * Also, access permissions are not checked.
     *
     * @remarks
     * **!!!Warning!!!**
     *
     * There are very few cases where this method is needed.
     * A common mistake is to replace a method and then invoke the original one based on dynamic conditions.
     * This creates overhead and skips further hooks by other modules.
     * Instead, just hook (don't replace) the method and call `param.setResult(null)` in {@link XC_MethodHook.beforeHookedMethod XC_MethodHook.beforeHookedMethod(XC_MethodHook.MethodHookParam)} if the original method should be skipped.
     *
     * @param method The method to be called.
     * @param thisObject For non-static calls, the "this" pointer, otherwise `null`.
     * @param args Arguments for the method call as Object[] array.
     * @returns object The result returned from the invoked method.
     */
    static invokeOriginalMethod: (method: Member, thisObject: Object, args: Object[]) => Object;
    /**
     * Writes a message to the Xposed error log.
     *
     * Logs a stack trace to the Xposed error log.
     *
     * @remarks
     * **!!!Danger!!!**
     *
     * **DON'T FLOOD THE LOG!!!** This is only meant for error logging. If you want to write information/debug messages, use logcat.
     *
     * @param text The log message.
     * @param t The Throwable object for the stack trace.
     */
    static log: (text: string | Throwable) => void;
    /**
     * Removes the callback for a hooked method/constructor.
     *
     * @deprecated
     * This method was deprecated in API level 81.
     * Use {@link XC_MethodHook.Unhook.unhook XC_MethodHook.Unhook.unhook()} instead.
     * An instance of the `Unhook` class is returned when you hook the method.
     */
    static unhookMethod: (hookMethod: Member, callback: XC_MethodHook) => void;
}
