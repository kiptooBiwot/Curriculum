const router = require('express').Router()
const curriculaControllers = require('../controllers/Curricula.controllers')

// Curricula Routes

router.get('/curricula', curriculaControllers.getAllCurricula)

router.get('/curricula/:id', curriculaControllers.getOneCurricula)

router.post('/curricula', curriculaControllers.createCurricula)

router.put('/curricula/:id', curriculaControllers.editCurricula)

router.delete('/curricula/:id', curriculaControllers.deleteCurricula)

module.exports = router