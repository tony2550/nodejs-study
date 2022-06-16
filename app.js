const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler); // import propety from routes

console.log(routes.someText);

server.listen(8090, () => {
    console.log('Server is running');
});
