const info = require('../controllers/info.controller')

const routers = require('express').Router()

routers.post('/info',info.create)

routers.get('/infos', info.getAll)

routers.get('/info', info.getOne)

routers.put('/info', info.update)

routers.delete('/info', info.delete)

routers.delete('/infos', info.deleteAll)

module.exports = routers