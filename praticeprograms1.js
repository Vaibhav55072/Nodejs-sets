//Convert output: Hello vaibhav! into upper-case letters

var http=require('http');//creating an server
var uc=require('upper-case');//taking require  external modules
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(uc.upperCase("Hello Vaibhav!"));
res.end()
});listen(8080);