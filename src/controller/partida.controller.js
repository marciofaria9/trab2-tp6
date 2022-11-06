const service = require('../service/partida.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('partida criada')
}

const getAll = async (req, res) => {
    const response = await service.getAll()
    res.send(response)
}

const getPartidaById = async (req, res) => {
    const partidaId = parseInt(req.params.id, 10)
    res.send(await service.getPartidaById(partidaId))
}

const getPartidaByDate = async (req, res) => {
    const partidaDate = String(req.params.date)
    res.send(await service.getPartidaByDate(partidaDate))
}

const getPartidaByTime = async (req, res) => {
    const partidaTime = String(req.params.time)
    res.send(await service.getPartidaByTime(partidaTime))
}

const update = async (req, res) => {
    const partidaId = req.params.id
    await service.update(partidaId, req.body)
    res.status(200).send('partida alterada')
}

const remove = async (req, res) => {
    const partidaId = req.params.id
    await service.remove(partidaId)
    res.status(204).send('Partida deletada')
}

module.exports = {
    create,
    getAll,
    getPartidaById,
    update,
    remove,
    getPartidaByDate,
    getPartidaByTime
}