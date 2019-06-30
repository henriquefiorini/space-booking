const SQL = require('sequelize');

function createStore() {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in,
  };

  const db = new SQL('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './store.sqlite',
    operatorsAliases,
    logging: false,
  });

  const users = db.define('user', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: SQL.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: SQL.STRING,
      allowNull: false,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
  });

  const trips = db.define('trip', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    launchId: SQL.INTEGER,
    userId: SQL.INTEGER,
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
  });

  // db.sync({ force: true });

  return { users, trips };
};

module.exports = createStore;
