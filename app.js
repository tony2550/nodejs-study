const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    // default route
    console.log('prepare page');
    next();
});

app.use('/list', (req, res, next) => {
    // '/list'
    console.log('list page');
    res.send('<h1>It is List Page</h1>');
});

app.use('/', (req, res, next) => {
    // default route
    console.log('Default page');
    res.send('<h1>Thanks to ExpressJS!</h1>');
});

app.listen(8090, () => {
    console.log('Server is running');
});
