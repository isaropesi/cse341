const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

router.get('/', (req, res) => {
    res.send('Contacts API');
});

module.exports = router;
