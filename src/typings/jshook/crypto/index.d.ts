/**
 * 用于进行字符串加密解密
 */
declare const crypto: {
    encrypt: (key: rhino_string, data: rhino_string, enctype: import("./enum").EncType, transformation: import("./enum").Transformation) => java_lang_String,
    encryptBytes: (key: java_byte[], data: java_byte[], enctype: import("./enum").EncType, transformation: import("./enum").Transformation) => java_byte[],
    decrypt: (key: rhino_string, data: rhino_string, enctype: import("./enum").EncType, transformation: import("./enum").Transformation) => java_lang_String,
    decryptBytes: (key: java_byte[], data: java_byte[], enctype: import("./enum").EncType, transformation: import("./enum").Transformation) => java_byte[],
    /**
     * @returns result base64
     */
    rc4Encrypt: (key: rhino_string, data: rhino_string) => java_lang_String,
    rc4EncryptBytes: (key: java_byte[], data: java_byte[]) => java_byte[],
    /**
     * @returns result base64
     */
    rc4Decrypt: (key: rhino_string, data: rhino_string) => java_lang_String,
    rc4DecryptBytes: (key: java_byte[], data: java_byte[]) => java_byte[],
    /**
     * @returns hash hex, 大写, 32位
     */
    md5: (data: rhino_string) => java_lang_String,
    /**
     * @returns hash hex, 大写, 32位
     */
    md5Bytes: (data: java_byte[]) => java_lang_String,
    /**
     * @returns hash hex, 大写, 40位
     */
    sha1: (data: rhino_string) => java_lang_String,
    /**
     * @returns hash hex, 大写, 40位
     */
    sha1Bytes: (data: java_byte[]) => java_lang_String,
    /**
     * @returns hash hex, 大写, 64位
     */
    sha256: (data: rhino_string) => java_lang_String,
    /**
     * @returns hash hex, 大写, 64位
     */
    sha256Bytes: (data: java_byte[]) => java_lang_String,
}
