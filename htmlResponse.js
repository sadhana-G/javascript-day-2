const http = require('http');
const server = http.createServer((req,res)=>
{
    res.setHeader('Content-Type', 'text/html');
    res,ebd('<h1>Welcome to Node.js with HTML!</h1>');
});
server.listen(3000);