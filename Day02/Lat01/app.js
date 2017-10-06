var vhttp = require('http');
var vurl = require('url');
var vfs = require('fs');

vhttp.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plan"});
    res.write("selamat datang di node JS \n");
    res.write("urlnya adalah"+req.url);
    res.end();
}).listen(8889);

console.log("server is running");