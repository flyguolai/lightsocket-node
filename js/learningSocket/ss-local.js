const net = require("net");
const colors = require('colors')

//LocalSockt Socket接口 用于像ss-Server 发送消息
var LocalSocket = new net.Socket();

LocalSocket.connect({
    host:'localhost',
    port:10086
})

//LocalServer 本地服务器，用于监听本地端口消息，并进行转发
var LocalServer = net.createServer((conn)=>{

    //conn为客户机的链接向本地服务器的socket链接
    console.log('client connected'.green)

    //向本地端口发送一个连接成功的消息
    //conn.write('LocalServer connected success')

    //当链接断开的时候，打印一个log    
    conn.on('end',function(){
        console.log('client disconnected'.red)
    }).on('error',function(e){
        console.log('conn error')
        console.log(e)
    }).on('close',function(){
        console.log('conn close')
    }).on('data',function(data){
        //监听消息
        console.log('localServer getMessage'.green);
        console.log(data.toString('utf-8'));
        //当有消息进入的时候，将消息转发至ssServer
        LocalSocket.write(data)
    })
})

//LocalServer 监听异常出错
LocalServer.on('error',function(err){
    throw err;
})


LocalServer.on('close',function(){
    console.log('localsocket close');
})

LocalServer.listen(1081,function(){
    console.log('the local Server is listening')
})