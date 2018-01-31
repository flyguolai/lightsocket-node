const net = require("net"),
      colors = require("colors");

//接收从localServer传来的消息并转发给目标服务器
var ssServer = net.createServer((conn)=>{
    console.log('sslocal connected'.bgGreen)
    conn.on('end',function(){
        console.log('sslocal disconnected'.green)
    })
    conn.on('data',function(data){
        console.log('ss Server get message'.green)
        console.log(data.toString('utf-8'))
    })
    conn.on('error',function(e){
        console.log(e.red)
    })
    conn.on('close',function(e){
        console.log(e.red)
    })
})

ssServer.on('error',function(err){
    throw err;
})

ssServer.listen(10086,function(){
    console.log('the lightSocket Server is listening'.green)
})

ssServer.on('close',function(){
    console.log('ssServer close'.red);
})