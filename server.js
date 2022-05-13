const http = require('http');
const dt = require('./myfirstmodule');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write(
        'The date and time are currently : ' + dt.myDateTime().toString()
    );
    res.end('Hello World!');
    console.log('My first Nodejs Server!');
    console.log('브라우저에서 localhost:8090으로 요청함');
}).listen(8090);
