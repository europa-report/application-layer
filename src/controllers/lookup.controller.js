const db = require('../models')
const Lookup = db.lookups
const status = require('../helpers/status')
const {sendStatus, sendErr, sendConfirmation } = status

module.exports = {

    create:(req, res)=>{
        
        if(!req.body.name){
            sendStatus(res)
            return
        }

        Lookup.create(req.body)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            sendErr(res,err)
        })
        
    },

    getAll:(req,res)=>{

        'includeInfo' in req.query ?
        Lookup.findAll({include: info}):
        Lookup.findAll()
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            status.sendErr(res,err)
        })
    },

    getOne:(req,res)=>{

        if(!req.body.name){
            sendStatus(res)
            return
        }

        Lookup.findOne({where:{name:req.params.name}})
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            status.sendErr(res,err)
        })
    },

    update:(req,res)=>{

        if(!req.body){
            sendStatus(res)
            return
        }
        
        Lookup.update(req.body,{
            where: {name:req.body.name}
        })
        .then(num =>{
            sendConfirmation(res,num)
        })
        .catch(err =>{
            status.sendErr(res,err)
        })
    },

    delete:(req,res)=>{
        
        if(!req.params.id){
            sendStatus(res)
            return
        }

        Lookup.delete(
            {
                where:{id: req.params.id}
            })
            .then(num=>{
                sendConfirmation(res,num)
            })
            .catch(err =>{
                sendErr(res,err)
            })
    },

    deleteAll:(req,res)=>{

        Lookup.destroy({
            where:{},
            truncat:false
        })
        .then(num =>{
            sendConfirmation(res, num)
        })
        .catch(err =>{
            sendErr(res,err)
        })
    }

}