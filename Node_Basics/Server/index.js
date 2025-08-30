const http = require('http')
const url = require('url')

const server = http.createServer((req, res)=>{
   let path = req.url;
   console.log(path);
   if (path=='/' || path=='/overview') {
    res.end('Message from overview');
   }
   else if(path == '/product'){
    res.end('Message from product');
   }
   else{
    res.writeHead(404,{
        'Content-type':'text/html',
        'my-header':'my custome header'
    })
    res.end('<h1>Page not found</h1>');
   }


   
})

server.listen(8080, '127.0.0.1', ()=>{
    console.log("Server started...");
})