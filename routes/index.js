const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

router.get('/', (req, res) => {
    res.redirect('/api-docs');
});

module.exports = router;
