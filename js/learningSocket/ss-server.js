const net = require("net");

var LocalServer = net.createServer((conn)=>{
    console.log('client connected')
    conn.on('end',function(){
        console.log('client disconnected')
    })
    conn.write('hello')
    conn.on('error',function(e){
        console.log(e)
    })
    conn.on('close',function(e){
        console.log(e)
    })
    conn.pipe(conn)
})

LocalServer.on('error',function(err){
    throw err;
})

LocalServer.listen(10086,function(){
    console.log('the local Server is listening')
})


LocalServer.on('close',function(){
    console.log('localsocket close');
})