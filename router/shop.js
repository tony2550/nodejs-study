const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // default routedd
    console.log('Default page');
    res.status(202).send('<h1>Thanks to ExpressJSd!</h1>');
});

module.exports = router;
