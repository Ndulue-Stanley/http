import http, {ServerResponse, IncomingMessage} from 'http'

const port: number = 5373

const Server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
    res.writeHead(200);
    res.write(`done`)
    res.end()
})

Server.listen(port, ()=>{
    console.log(`listening ${port}`);
    
})