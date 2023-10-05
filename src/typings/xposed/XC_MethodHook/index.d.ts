/**
 * https://api.xposed.info/reference/de/robv/android/xposed/XC_MethodHook.html
 *
 * Callback class for method hooks.
 *
 * Usually, anonymous subclasses of this class are created which override {@link beforeHookedMethod beforeHookedMethod(XC_MethodHook.MethodHookParam)} and/or {@link afterHookedMethod afterHookedMethod(XC_MethodHook.MethodHookParam)}.
 */
declare class XC_MethodHook implements java_lang_Object {
    /**
     * Wraps information about the method call and allows to influence it.
     */
    static MethodHookParam = class {
        /**
         * Arguments to the method call.
         */
        args: java_lang_Object[];
        /**
         * The hooked method/constructor.
         */
        method: java_lang_reflect_Member;
        /**
         * The `this` reference for an instance method, or `null` for static methods.
         */
        thisObject: java_lang_Object | null;
        /**
         * Returns the result of the method call.
         */
        getResult(): java_lang_Object;
        /**
         * Returns the result of the method call, or throws the Throwable caused by it.
         *
         * @throws Throwable {@link http://developer.android.com/reference/java/lang/Throwable.html Throwable}
         */
        getResultOrThrowable(): java_lang_Object;
        /**
         * Returns the {@link http://developer.android.com/reference/java/lang/Throwable.html Throwable} thrown by the method, or `null`.
         */
        getThrowable(): java_lang_Throwable | null;
        /**
         * Returns true if an exception was thrown by the method.
         */
        hasThrowable(): java_boolean;
        /**
         * Modify the result of the method call.
         *
         * If called from {@link XC_MethodHook.beforeHookedMethod XC_MethodHook.beforeHookedMethod(XC_MethodHook.MethodHookParam)}, it prevents the call to the original method.
         */
        setResult(result: java_lang_Object): void;
        /**
         * Modify the exception thrown of the method call.
         *
         * If called from {@link XC_MethodHook.beforeHookedMethod XC_MethodHook.beforeHookedMethod(XC_MethodHook.MethodHookParam)}, it prevents the call to the original method.
         */
        setThrowable(throwable: java_lang_Throwable): void;
    }
    /**
     * An object with which the method/constructor can be unhooked.
     */
    static Unhook = class {
        /**
         * Returns the callback that has been registered.
         */
        getCallback(): XC_MethodHook;
        /**
         * Returns the method/constructor that has been hooked.
         */
        getHookedMethod(): java_lang_reflect_Member;
        /**
         * Removes the callback.
         */
        unhook(): void;
    }
    /**
     * Called after the invocation of the method.
     *
     * You can use {@link XC_MethodHook.MethodHookParam.setResult XC_MethodHook.MethodHookParam.setResult(Object)} and {@link XC_MethodHook.MethodHookParam.setThrowable XC_MethodHook.MethodHookParam.setThrowable(Throwable)} to modify the return value of the original method.
     *
     * Note that implementations shouldn't call `super(param)`, it's not necessary.
     *
     * @param param Information about the method call.
     * @throws Throwable {@link http://developer.android.com/reference/java/lang/Throwable.html Throwable}
     * Everything the callback throws is caught and logged.
     */
    protected afterHookedMethod(param: typeof XC_MethodHook.MethodHookParam.prototype): void;
    /**
     * Called before the invocation of the method.
     *
     * You can use {@link XC_MethodHook.MethodHookParam.setResult XC_MethodHook.MethodHookParam.setResult(Object)} and {@link XC_MethodHook.MethodHookParam.setThrowable XC_MethodHook.MethodHookParam.setThrowable(Throwable)} to prevent the original method from being called.
     *
     * Note that implementations shouldn't call `super(param)`, it's not necessary.
     *
     * @param param Information about the method call.
     * @throws Throwable {@link http://developer.android.com/reference/java/lang/Throwable.html Throwable}
     * Everything the callback throws is caught and logged.
     */
    protected beforeHookedMethod(param: typeof XC_MethodHook.MethodHookParam.prototype): void;
}

declare function XC_MethodHook(param: {
    beforeHookedMethod?: (param: typeof XC_MethodHook.MethodHookParam.prototype) => void,
    afterHookedMethod?: (param: typeof XC_MethodHook.MethodHookParam.prototype) => void,
}): XC_MethodHook;
