const net = require("net");

var ComputerSocket = new net.Socket();

ComputerSocket.connect({port:1081,host:'localhost'},function(conn){
    console.log('sendback')
    SendMessage();
})

ComputerSocket.on('data',function(data){
    console.log(data);
})

function SendMessage(){
    ComputerSocket.write('123')
}