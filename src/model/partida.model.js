module.exports = (sequelize, DataTypes) => {
    const Partida = sequelize.define('partida', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data_partida: DataTypes.DATE, 
        selecao_mandante: DataTypes.STRING,
        selecao_visitante: DataTypes.STRING,
        gol_mandante: DataTypes.INTEGER,
        gol_visitante: DataTypes.INTEGER

    },

        {
            timestamps: false,
            freezeTableName: false
        })

    return Partida
}


