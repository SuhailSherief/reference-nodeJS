// const Person = require('./components');
// 
// const p1 = new Person("Lucifer", 10);
// const p2 = new Person("LuciFer", 19);
// const p3 = new Person("LuSe1F3r", 18);
// 
// p1.getDetails();
// p2.getDetails();
// p3.getDetails();
// 
// 
// const Logger = require('./logger');
// 
// const logger = new Logger();
// logger.on('event', (data) =>{
//     console.log(data);
// });
// logger.get('hello');
// logger.get('momoring');

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url);
    let filePath = path.join(__dirname, '/sources', req.url === '/' ? 'index.html' : req.url);

    let extName = path.extname(filePath);

    let contentType = 'text/html';

    switch(extName){
        case '.js':
        {
            contentType = 'text/javascript';
            break;
        }
        case '.css':
        {
            contentType = 'text/css';
            break;
        }
        case '.json':
        {
            contentType = 'application/json';
            break;
        }
        case '.png':
        {
            contentType = 'image/png';
            break;
        }
        case '.jpg':
        {
            contentType = 'image/jpg';
            break;
        }
    }

    fs.readFile(filePath, (err, content) => {
        if(err)
        {
            if(err.code = 'ENOENT')
            {
                fs.readFile(path.join(__dirname, '/sources', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.end(content, 'utf8');
                });
            }
            else 
            {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        else
        {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));