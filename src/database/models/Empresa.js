module.exports = (sequelize, dataTypes) => {
    let alias = 'Empresa';
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
        tableName: 'empresa',
        timestamps: false
    };

    const Empresa = sequelize.define(alias, cols, config);

    Empresa.associate = function (models) {
        Empresa.hasMany(models.Persona, {
            as: 'personas',
            foreignKey: 'id_empresa'
        })
    }

    return Empresa;
}