const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./router/admin'); // admin router import
const shopRoutes = require('./router/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes); // 적용! 여기서 adminRoutes는 admin.js에서 export되는 라우터 object이다.
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>');
});

app.listen(8090, () => {
    console.log('Server is running');
});
