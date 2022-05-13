const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
});

server.listen(8090, () => {
    console.log('Server is running');
});
