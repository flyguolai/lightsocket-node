/**
 * create by flyguolai @ 2018/1/30
 * 本地服务器
 * 本地服务器的职责：
 * 1、监听来自本地特定端口的请求
 * 2、转发前加密数据
 * 3、转发socket数据到代理服务器
 * 4、把代理服务器返回的数据发给用户的本机监听端口
 */

var {Socket} =require("net");
var Cipher = require('../core/cipher')
var SecureSocket = require('../core/secureSocket')
var Password = require('../core/password')

class LocalServer {
    constructor(password,listenAddr,remoteAddr){
        this.secureSocket = {
            Cipher : new Cipher(password),
            listenAddr : listenAddr,
            remoteAddr : remoteAddr
        }
    }

    Listen(){
        var LocalSocket = new Socket();
        LocalSocket.connect({
            listenAddr
        })
    }
}