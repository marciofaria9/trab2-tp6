const { partida } = require('../model/index')
const { Op } = require('sequelize')


const create = async data => {
    await partida.create(data)
}

const getAll = async () => {
    return await partida.findAll()
}

const getPartidaById = async partidaId => {
    return await partida.findAll({
        where: {
            id: partidaId
        }
    })
}

const getPartidaByDate = async partidaDate => {
    return await partida.findAll({
        where: {
            data_partida: partidaDate
        }
    })
}

const getPartidaByTime = async partidaTime => {
    return await partida.findAll({
        where: {
            [Op.or]: [
                {selecao_mandante: partidaTime},
                {selecao_visitante: partidaTime}
            ]
        }
    })
}

const update = async (partidaId, data) => {
    return await partida.update(data, {
        where: {
            id: partidaId
        }
    })
}

const remove = async partidaId => {
    return await partida.destroy({
        where: {
            id: partidaId
        }
    })
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