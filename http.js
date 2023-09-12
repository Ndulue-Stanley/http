const http = require("http")

const PORT = 2000

const server = http.createServer((request , response)=>{
    response.writeHead(200)
    response.write("server is up and running 😎😎")
    response.end()
})

server.listen(PORT , ()=>{
    console.log("port is up and listening")
})

console.log(http.STATUS_CODES)
