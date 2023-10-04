// console.log("aes/aes: ", JSON.stringify(crypto.encrypt("qwerqwerqwerqwer", "abc", EncType.CRYPTO_AES, Transformation.AES_CBC_PKCS5Padding)));
// console.log("des/aes: ", JSON.stringify(crypto.encrypt("qwerqwerqwerqwer", "abc", EncType.CRYPTO_DES, Transformation.AES_CBC_PKCS5Padding)));
// console.log("aes/des: ", JSON.stringify(crypto.encrypt("qwerqwerqwerqwer", "abc", EncType.CRYPTO_AES, Transformation.DES_CBC_PKCS5Padding)));
// console.log("des/des: ", JSON.stringify(crypto.encrypt("qwerqwerqwerqwer", "abc", EncType.CRYPTO_DES, Transformation.DES_CBC_PKCS5Padding)));

import {type} from "@/utils/utils";
// import {EncType, Transformation} from "@/typings/jshook/crypto/enum";

// const encrypt = crypto.encrypt("abcdefghijklmnop", "123", EncType.CRYPTO_AES, Transformation.AES_CBC_PKCS5Padding);
// console.log(`encrypt: ${type(encrypt)} = ${encrypt}`);

// const encryptBytes = crypto.encryptBytes([0x61,0x62,0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6a,0x6b,0x6c,0x6d,0x6e,0x6f,0x70], [0x31,0x32,0x33], EncType.CRYPTO_AES, Transformation.AES_CBC_PKCS5Padding);
// console.log(`encryptBytes: ${type(encryptBytes)} = ${encryptBytes}`);

// const decrypt = crypto.decrypt("abcdefghijklmnop", encrypt, EncType.CRYPTO_AES, Transformation.AES_CBC_PKCS5Padding);
// console.log(`decrypt: ${type(decrypt)} = ${decrypt}`);

// const decryptBytes = crypto.decryptBytes([0x61,0x62,0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6a,0x6b,0x6c,0x6d,0x6e,0x6f,0x70], encryptBytes, EncType.CRYPTO_AES, Transformation.AES_CBC_PKCS5Padding);
// console.log(`decryptBytes: ${type(decryptBytes)} = ${decryptBytes}`);

const rc4Encrypt = crypto.rc4Encrypt("abcd", "123");
console.log(`rc4Encrypt: ${type(rc4Encrypt)} = ${rc4Encrypt}`);

const rc4Decrypt = crypto.rc4Decrypt("abcd", rc4Encrypt);
console.log(`rc4Decrypt: ${type(rc4Decrypt)} = ${rc4Decrypt}`);

const rc4EncryptBytes = crypto.rc4EncryptBytes([0x61,0x62,0x63,0x64,0x65,0x66], [0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38]);
console.log(`rc4EncryptBytes: ${type(rc4EncryptBytes)} = ${rc4EncryptBytes.map(v => v)}`);

const rc4DecryptBytes = crypto.rc4DecryptBytes([0x61,0x62,0x63,0x64,0x65,0x66], rc4EncryptBytes);
console.log(`rc4DecryptBytes: ${type(rc4DecryptBytes)} = ${rc4DecryptBytes.map(v => v)}`);

const rc4EncryptBytesAgain = crypto.rc4EncryptBytes([0x61,0x62,0x63,0x64,0x65,0x66,0x67,0x68], rc4EncryptBytes);
console.log(`rc4EncryptBytesAgain: ${type(rc4EncryptBytesAgain)} = ${rc4EncryptBytesAgain.map(v => v)}`);
