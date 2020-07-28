const express = require('express');
const router = express.Router();
const {
    readMovies
} = require('../data/dal');

router.get('/', (req, res) => {
    readMovies().then(data => {
      res.send(data)  ;
    });    
});

module.exports = router;