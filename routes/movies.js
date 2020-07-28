const express = require('express');
const router = express.Router();
const {
    readMovies,
    createMovies
} = require('../data/dal');

//async style, but why? waiting for readMovies to run
router.get('/', async function (req, res, next) {
    const data = await readMovies();
      res.send(data)  ; 
});

router.post('/', (req, res, next) => {
    const body = req.body;
    createMovies(body).then(data => {
        res.send(data);
    });
});
module.exports = router;