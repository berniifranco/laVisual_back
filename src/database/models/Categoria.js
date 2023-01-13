const Carrito = require("./Carrito");

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

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'id_categoria'
        })
    }

    return Categoria;
}