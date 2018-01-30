const R = require('ramda')
const { Buffer } = require('buffer');
const { Socket } = require('net');

const BUFFER_SIZE = 1024;

/**
 * secureSocket是一个对socket进行封装的对象
 * 用于进行socket间的数据传输，并实现编解码用于绕过GFW
 */
class SecureSocket{
    /**
     * 
     * @param {Cipher} cipher - 编码/解码器 
     * @param {String} listenAddr - 监听端口号(本地)
     * @param {String} remoteAddr - 服务器端口号(服务端)
     */
    constructor(cipher,listenAddr,remoteAddr){
        this.socket = null;    
        this.cipher = cipher;
        this.listenAddr = listenAddr;
        this.remoteAddr = remoteAddr;
    }
    
    /**
     * 
     * @param {Base64} bs 
     */
    decodeRead(bs){
        return this.cipher.decode(bs);
    }

    /**
     * 把放在bs里的base64数据加密后立即写入输出流
     * @param {Base64} bs 
     */
    encodeWrite(bs){
        var bytes = this.cipher.encode(bs);
        return this.socket.write(bs)
    }

    /**
     * 从src中读取原数据加密后写入到远程服务器，直到src中没有东西可以读取
     */
    encodeCopy(){
        var buffer = Buffer.alloc(BUFFER_SIZE);
        this.socket.on('data',function(buffer){
            this.encodeWrite(buffer)
        })
    }

    /**
     * 从src中读取加密后的数据进行解密，然后写入到本地服务器，知道src中没有东西可以读取
     */
    decodeCopy(){
        var buffer = Buffer.alloc(BUFFER_SIZE);

    }

    start(){
        this.socket = new Socket();
        this.socket.connect({
            port:this.remoteAddr.port,
            ip:this.remoteAddr.ip,
            format:this.remoteAddr.format
        })

        this.socket.on('close',function(e){
            console.log(e)
            console.log(`连接到远程服务器${this.remoteAddr.ip}:${this.remoteAddr.port}失败`)
        })

    }


}

exports.modules = SecureSocket;