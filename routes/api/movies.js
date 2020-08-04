const express = require('express');
const router = express.Router();
const {
    readMovies,
    createMovies,
    updateMovies,
    deleteMovies
} = require('../../data/dal');

//async style, but why? waiting for readMovies to run
router.get('/', async function(req, res) {
    const data = await readMovies();
      res.send(data)  ; 
});

router.post('/', async function(req, res )  {
    const body = req.body;
    const data = await createMovies(body);
        res.send(data);
    ;
});

router.patch('/:id', async function(req, res )  {
    const body = req.body;
    const id = req.params.id;
    const data = await updateMovies(id, body);
        res.send(data);
    ;
});

router.delete('/:id', async function(req, res) {
    const data = await deleteMovies(req.params.id); 
        res.send(data)
    });


module.exports = router;