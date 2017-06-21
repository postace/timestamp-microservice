const express = require('express');

const utils = require('../utils/time.utils');

let router = express.Router();

router.get('/health', (req, res) => {
    res.writeHead(200);
    res.end('Feel Good!');
});


router.get('/:param', (req, res) => {  
  let input = req.params.param;
  
  // handle param, try parse date
  let dateProcessed = utils.getDateObject(input);
  
  res.json(dateProcessed);
});

module.exports = router;