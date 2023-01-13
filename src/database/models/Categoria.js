module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'categoria',
        timestamps: false
    };

    const Categoria = sequelize.define(alias, cols, config);

    return Categoria;
}