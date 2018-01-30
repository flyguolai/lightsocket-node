import { Buffer } from "buffer";

const R = require("ramda");

const ERROR_INVALID_PASSWORD = "不合法的密码";
const PASSWORD_LENGTH = 256;

function init(){
    //更新随机密码？
}

/**
 * 
 * @param {Base64} password 经过base64编码的String
 * @returns {String} 返回值为从base64编译回来的String 
 */
function StringifyPassword(password){
    return password.toString();
}

/**
 * 
 * @param {String} password 将String编码为base64
 * @returns {Base64} 返回值为经过编码的String值
 */
function ParsePassword(password){
    //转换为base64数组
    var bytes = new Buffer(password.trim());
    return bytes;
}

/**
 * 生成一个255位的随机映射值
 * key != value ，仅仅为映射关系
 */
function RandomPassword(){
    //随机生成一个由1~255构成的数组
    var arrays = R.times(R.identical,PASSWORD_LENGTH);
    //password = Buffer.alloc(255);
    arrays.sort(function(a,b){
        return Math.random() > .5 ? -1 : 1;
    })
    return arrays.filter(function(a_v,a_k){return a_v == a_k}).length == 0 ? RandomPassword() : arrays;
}