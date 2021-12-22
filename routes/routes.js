const express = require('express');

const router = express.Router();
router.route('/').get(function(req, res) {
    console.log('Request received');
    res.send('got message')
});

module.exports = router;