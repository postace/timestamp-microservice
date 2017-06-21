const express = require('express');

let router = express.Router();

router.get('/health', (req, res) => {
    res.writeHead(200);
    res.end('Feel Good!');
});


router.get('/:param', (req, res) => {  
  let input = req.params.param;
  
  // handle param, try parse date
  
  
  res.end(`Your param was ${input}`);
});

module.exports = router;