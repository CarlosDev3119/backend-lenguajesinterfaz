const { DataTypes } = require('sequelize');
const { db } = require('../../database/dbConfig');

const Role = db.define('Role', {
    id_role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_role: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
}, {
    tableName: 'roles',
    timestamps: false,
});

module.exports = Role;