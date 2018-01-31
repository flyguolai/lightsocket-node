const net = require("net"),
      colors = require("colors");

//接收从localServer传来的消息并转发给目标服务器
var ssServer = net.createServer((conn)=>{
    console.log('sslocal connected')
    conn.on('end',function(){
        console.log('sslocal disconnected')
    })
    conn.on('data',function(data){
        console.log('########'.green)
        console.log(data)
        console.log(data.toString('utf-8').blue)
    })
    conn.on('error',function(e){
        console.log(e)
    })
    conn.on('close',function(e){
        console.log(e)
    })
})

ssServer.on('error',function(err){
    throw err;
})

ssServer.listen(10086,function(){
    console.log('the lightSocket Server is listening')
})

ssServer.on('close',function(){
    console.log('ssServer close');
})