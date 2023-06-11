const { DataTypes } = require('sequelize');
const Role = require('./roles');
const { db } = require('../../database/dbConfig');

const User = db.define('User', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_user: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  pass: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  estatus: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  id_role: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false
});

User.belongsTo(Role, {
  foreignKey: 'id_role',
  onDelete: 'CASCADE'
});

module.exports = User;