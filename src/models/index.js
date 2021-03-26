const { Sequelize } = require('sequelize')
const dbConfig = require('../configs/db.config')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.lookups = require('./lookup.model')(sequelize, Sequelize)
db.infos = require('./info.model')(sequelize, Sequelize)

db.lookups.hasMany(db.infos)
db.infos.belongsTo(db.lookups)

module.exports = db