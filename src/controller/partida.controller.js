const service = require('../service/partida.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Match created')
}

const getAll = async (req, res) => {
    const response = await service.getAll()
    res.send(response)
}

const getPartidaById = async (req, res) => {
    const partidaId = parseInt(req.params.id, 10)
    res.send(await service.getPartidaById(partidaId))
}

const update = async (req, res) => {
    const partidaId = req.params.id
    await service.update(partidaId, req.body)
    res.status(200).send('Match updated')
}

const remove = async (req, res) => {
    const partidaId = req.params.id
    await service.remove(partidaId)
    res.status(204).send('Match deleted')
}

module.exports = {
    create,
    getAll,
    getPartidaById,
    update,
    remove
}
