const router = require('express').Router();

const { Peli } = require('../../db');


router.get('/', async (req,res) =>{
    console.log(req.usuarioId)
  const peliculas = await Peli.findAll();
  res.json(peliculas);
})


router.post('/', async (req,res) => {
    const film = await Peli.create(req.body);
    res.json(film);
})

router.put('/:filmId', async (req,res) => {
    await Peli.update(req.body, {
        where: {id: req.params.filmId}
    });
    res.json({success: 'se ha modificado'});
})

router.delete('/:filmId', async(req, res) =>{
    await Peli.destroy({
        where: {id: req.params.filmId}
    })
    res.json({success: 'se elimino correctamente'})
})
module.exports= router;