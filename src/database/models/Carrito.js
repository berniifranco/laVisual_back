module.exports = (sequelize, dataTypes) => {
    let alias = 'Carrito';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'carrito',
        timestamps: false
    };

    const Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function (models) {
        Carrito.belongsTo(models.Persona, {
            as: 'persona',
            foreignKey: 'id_persona'
        });
        Carrito.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'id_producto'
        });
        Carrito.belongsToMany(models.Producto, {
            through: 'producto_carrito',
            foreignKey: 'id_carrito',
            otherKey: 'id_producto'
        })
    }
    
    return Carrito;
}