module.exports = (sequelize, dataTypes) => {
    let alias = "Rol";
    let columnas = {
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
        tableName: 'rol',
        timestamps: false
    };

    const Rol = sequelize.define(alias, columnas, config);

    return Rol;
}