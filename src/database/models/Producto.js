module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        precio: {
            type: dataTypes.NUMBER,
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'producto',
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Persona, {
            as: 'persona',
            foreignKey: 'id_persona'
        });
        Producto.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'id_categoria'
        });
        Producto.belongsToMany(models.Carrito, {
            through: 'producto_carrito',
            foreignKey: 'id_producto',
            otherKey: 'id_carrito'
        })
    }

    return Producto;
}