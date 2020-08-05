const express = require('express');
const router = express.Router();
const {
    readMovies,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../../data/dal');

//async style, but why? waiting for readMovies to run
router.get('/', async function(req, res) {
    const data = await readMovies();
      res.send(data)  ; 
});

router.post('/', async function(req, res )  {
    const body = req.body;
    const data = await createMovie(body);
        res.send(data);
    ;
});

router.put('/:id', async function(req, res )  {
    const body = req.body;
    const id = req.params.id;
    const data = await updateMovie(id, body);
        res.send(data);
    ;
});

router.delete('/:id', async function(req, res) {
    const data = await deleteMovie(req.params.id); 
        res.send(data)
    });


module.exports = router;