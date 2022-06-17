const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allow the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Thanks to ExpressJS!</h1>');
    // Hooked into this funnel
});

app.listen(8090, () => {
    console.log('Server is running');
});
