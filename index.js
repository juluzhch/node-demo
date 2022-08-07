var http =require('http')

http.createServer(function (requset,response){
 response.writeHead(200,{'Content-Type':"text/plain"});
 response.write("Hello World 1\n");
 response.end();
}).listen(8888);

console.log('server running at localhost:8888')