const express = require('express');

let router = express.Router();

router.get('/health', (req, res) => {
    res.writeHead(200);
    res.end('Feel Good!');
});

// handling some logic here
router.get();

module.exports = router;