import { Buffer } from "buffer";
import R from "ramda";

/**
 * @class Cipher - 生成一个Cipher对象
 */
class Cipher{
    /**
     * @constructor
     * 编解码都是面向于base64的编码进行的
     * @param {Base64} encodePassword 
     * @param {Base64} decodePassword 
     */
    constructor( encodePassword = null , decodePassword = null ){
        var decodePassword = Buffer.alloc(256);
        encodePassword.map(function(v,k){
            return decodePassword[v] = k;
        })
        
        this.encodePassword = encodePassword;
        this.decodePassword = decodePassword;
    }

    /**
     * 
     * @param {Base64} bs - 传入一个base64数组
     * 通过password的base64对应的k-v数组进行编码 
     */
    encode(bs){
        return bs.map(function(v,k){ return this.encodePassword(v)})
    }

    /**
     * 
     * @param {Base64} bs - 传入一个base64数组
     * 通过password的base64对应的k-v数组进行解码 
     */
    decolde(bs){
        return bs.map(function(v,k){ return this.decodePassword(v)})
    }


}

