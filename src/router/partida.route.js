const express = require('express')
const router = express.Router()
const controller = require('../controller/partida.controller')

router.get('/', controller.getAll)
router.get('/data/:date',controller.getPartidaByDate)
router.post('/', controller.create)
router.get('/:id', controller.getPartidaById)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)
router.get('/selecao/:time', controller.getPartidaByTime)


module.exports = router