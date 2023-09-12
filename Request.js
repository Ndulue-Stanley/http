// const http = require("http")

// const port  = 6474;
// //handling http request
// const Server = http.createServer((req, res)=>{
//   if(req.url === '/'){
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.write('<html><body><p> This is my Homepage</p></body</html>');
//     res.end()
//   }else if (req.url === '/about'){
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.write('<html><body><p>This is my About page</p></body></html>');
//     res.end();
//   }else if(req.url === '/contact'){
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.write('<html><body><p>This is my Contact page</p></body></html>');
//     res.end()
//   }else res.end('Invalid Request')
// })

// Server.listen(port, ()=>{
//     console.log(`listening on port: ${port}`);
// })