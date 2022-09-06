const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // '/list'
    console.log('add-product page');
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/'); // response 리다이렉트ddd
});
//

module.exports = router;
