var vhttp = require('http');
var vurl = require('url');
var vfs = require('fs');

vhttp.createServer(function(req,res){
    var akses=vurl.parse(req.url); // url melakukan validasi request dan responsnya
    if (akses.pathname == "/") {
        res.writeHead(200, {
            "content-type": "text/html"   //respon dari server berupa html

        })
        alamat = "./Lat01/index.html";          //mengambil file
        vfs.createReadStream(alamat).pipe(res);
    } else {
        res.writeHead(404, { "Content-Type": "text/plan" });
        res.write("alamat tidak ada \n");
        res.write("urlnya adalah " + req.url);
        res.end();
    }
    
}).listen(8889);

console.log("server is running");