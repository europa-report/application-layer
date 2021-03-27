
    const lookup = require('../controllers/lookup.controller')

    const routers = require('express').Router()

    routers.post('/lookup',lookup.create)

    routers.get('/lookups',lookup.getAll)

    routers.get('/lookup',lookup.getOne)

    routers.put('/lookup',lookup.update)

    routers.delete('/lookup',lookup.delete)

    routers.delete('/lookups',lookup.deleteAll)
    
module.exports = routers