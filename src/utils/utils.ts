export function type(value: any) {
    if (value === null) {
        return "js:"+"null";
    }

    const baseType = typeof value;

    // 基本类型
    if (!["object", "function"].includes(baseType)) {
        return "js:"+baseType;
    }

    try {
        // 优先处理 Java 对象
        const javaClass = (value as java_lang_Object).getClass();
        return "java:"+javaClass.getTypeName();
    } catch (e) {
        // console.error(e);
    }

    try {
        // Symbol.toStringTag 通常指定对象类的“display name”
        // 它在 Object.prototype.toString() 中使用。
        const tag = value[Symbol.toStringTag];
        if (typeof tag === "string") {
            return "js:"+tag;
        }
    } catch (e) {
        console.error(e);
    }

    try {
        // 如果它是一个函数，其源代码以 "class" 关键字开头
        if (baseType === "function" && Function.prototype.toString.call(value).startsWith("class")) {
            return "js:"+"class";
        }
    } catch (e) {
        console.error(e);
    }

    try {
        // 构造函数的名称；例如 `Array`、`GeneratorFunction`、`Number`、`String`、`Boolean` 或 `MyCustomClass`
        const className = value.constructor.name;
        if (typeof className === "string" && className !== "") {
            return "js:"+className;
        }
    } catch (e) {
        console.error(e);
    }

    // 在这一点上，没有合适的方法来获取值的类型，因此我们使用基本实现。
    return "js:"+baseType;
}
