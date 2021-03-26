const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('subreddit', 'root', 'Dare7devil',{

    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
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