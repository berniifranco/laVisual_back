module.exports = (sequelize, dataTypes) => {
    let alias = 'Persona';
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
        },
        usuario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contrasena: {
            type: dataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: dataTypes.STRING,
            allowNull: false
        },
        provincia: {
            type: dataTypes.STRING,
            allowNull: false
        },
        pais: {
            type: dataTypes.STRING,
            allowNull: false
        },
        piso: {
            type: dataTypes.STRING,
            allowNull: true
        },
        departamento: {
            type: dataTypes.STRING,
            allowNull: true
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'persona',
        timestamps: false
    };

    const Persona = sequelize.define(alias, cols, config);

    Persona.associate = function (models) {
        Persona.belongsTo(models.Rol, {
            as: 'rol',
            foreignKey: 'id_rol'
        });
        Persona.belongsTo(models.Empresa, {
            as: 'empresa',
            foreignKey: 'id_empresa'
        });
        Persona.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'id_persona'
        });
        Persona.hasMany(models.Carrito, {
            as: 'carritos',
            foreignKey: 'id_persona'
        })
    }

    return Persona;
}