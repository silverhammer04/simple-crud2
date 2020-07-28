const express = require('express');
const router = express.Router();
const {
    readMovies
} = require('../data/dal');
//async style, but why? waiting for readMovies to run
router.get('/', async function (req, res) {
    const data = await readMovies();
      res.send(data)  ; 
});

module.exports = router;