const Role = require("./roles");
const User = require("./users");

User.belongsTo(Role, { foreignKey: 'id_role', onDelete: 'CASCADE' });

module.exports = {
  User,
  Role
};
