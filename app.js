const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    // default route
    console.log('this always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    // '/list'
    console.log('add-product page');
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
});
// 인수 생략가능 app.use('/product', (req, res, next))
app.use('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/'); // response 리다이렉트ddd
});
//
app.use('/', (req, res, next) => {
    // default routedd
    console.log('Default page');
    res.send('<h1>Thanks to ExpressJSd!</h1>');
});

app.listen(8090, () => {
    console.log('Server is running');
});
