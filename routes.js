const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write(
            '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
        );
        res.write(
            '<form action="/message2" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
        );
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    if (url === '/message2' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message2.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    // console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Mookie version Node.js Web Server</h1></body>');
    res.write('<body><h1>github Commit again</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;

// 2. exports many things
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text',
// };

// 3. same to 2 code
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

// 4. short cut
// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';