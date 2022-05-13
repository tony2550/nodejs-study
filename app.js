const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(8090, () => {
    console.log('Server is running');
});
