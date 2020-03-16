/* 原生websocket 服务*/
const net = require("net");
function parseHeader(str){
    let arr = str.split("\r\n").filter(line=>line);
    arr.shift();
    arr.forEach(line =>{
        let [name,value]= line.split(":");
        name = name.replace(/^/s+|/s+$/g).toLowerCase();
        value = value.replace(/^/s+|/s+$/g).toLowerCase();
        console.log("key:"+name);
        console.log("val:"+value);
    })
}
let server = net.createServer(sock=>{
    sock.once("data", buffer=>{
        let str = buffer.toString();
        parseHeader(str);
    })

    // console.log("有人连接");

    sock.on("end",()=>{
        console.log("已断开");
    })
});
server.listen(8080);
