const http = require('http');
const fs = require('fs');
const timestamp = require('time-stamp');

http.createServer((req, res)=>{
    fs.writeFile('./Sample/current date-time.txt', `${timestamp()}`, (err, data)=>{
        res.write(data);
        res.end();
    })
}).listen(8000, ()=>{
    console.log('Server Up and Running', 8000);
});

http.createServer((req, res)=>{
    fs.readFile('./Sample/current date-time.txt', (err, data)=>{
        res.write(data);
        res.end();
    })
}).listen(8000, ()=>{
    console.log("Server Up and Running", 8000)
})