const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>
{
    fs.readFile('index.html',(err,data) =>
    {
        if (err)
        {
            res.end('Error Loading File');

        }
        else{
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});
server.listen(5000);