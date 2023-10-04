/**
 * 用于进行字符串base64编码解码
 */
declare const base64: {
    encode: (data: rhino_string) => java_lang_String,
    encodeBytes: (data: java_byte[]) => java_byte[],
    decode: (data: rhino_string) => java_lang_String,
    decodeBytes: (data: java_byte[]) => java_byte[],
}
