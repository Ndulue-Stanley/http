import http,{ IncomingMessage, ServerResponse } from 'http'

import fs from 'fs'
import path from 'path'

const port: number = 8905


let dataset = [
    {
        id: '1',
        name: 'Okwudili Daniel',
        stack: 'Half stack'
    },
    {
        id: '2',
        name: 'Jemima Udoka',
        stack: 'Entry-Level stack'
    },
    {
        id: '3',
        name: 'Sean Etang',
        stack: 'Full stack'
    }
]

const Server = http.createServer((req:IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
    // res.writeHead(200);

    if(req.url === '/' && req.method === 'GET' && res.statusCode === 200){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(dataset));
        res.end();
    }
    res.end();
})
//     let connect: string = 'site/';

//     switch (req.url) {
//         case '/':
//             connect+= 'home.html',
//             res.statusCode = 200;
//             break;

//             case '/about':
//             connect += 'about.html',
//             res.statusCode = 200
//             break;

//             case '/contact':
//                 connect += 'contact.html',
//                 res.statusCode = 200
//                 break;
    
//         default:
//             connect+= '404.html',
//             res.statusCode = 404
//             break;
//     }

//     fs.readFile(path.join(__dirname, connect), (err, data)=>{
//         if(err){
//             console.log('An error occured', err);
//             res.end();
//         }else{
//             res.write(data);
//             res.end();
//         }
//     })
// });

Server.listen (port, ()=>{
    console.log('');
    console.log(`Server is listening on port, ${port}`)
})