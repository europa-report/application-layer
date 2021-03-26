module.exports = app =>{

    const lookup = require('../controllers/lookup.controller')

    const router = require('express').Router()

    router.post('/',lookup.create)

    router.get('/lookups',lookup.getAll)

    // router.get('/:name',lookup.findOne)

    router.put('/lookup',lookup.update)

    router.delete('/lookup',lookup.delete)

    router.delete('/lookups',lookup.deleteAll)

    app.use('/api/lookups',router)
}