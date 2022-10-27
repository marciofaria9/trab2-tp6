module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('partida', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: DataTypes.timestamps,
        selecao_mandante: DataTypes.STRING,
        selecao_visitante: DataTypes.STRING,
        gol_mandante: DataTypes.INTEGER,
        gol_visitante: DataTypes.INTEGER

    },

        {
            timestamps: true,
            freezeTableName: true
        })

    return Customer
}