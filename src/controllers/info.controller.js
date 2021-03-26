const db = require('../models')
const Info = db.infos
const status = require('../helpers/status')
const { sendStatus, sendConfirmation, sendErr } = require('../helpers/status')

module.exports = {

    create:(req, res)=>{

        if(!req.body){
            sendStatus(res)
            return
        }
        
        Info.create(req.body)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            sendErr(res, err)
        })
    },

    getAll:(req,res)=>{
        Info.findAll()
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            status.sendErr(res,err)
        })
    },

    getOne:(req,res)=>{
        
        if(!req.params.id){
            sendStatus(res)
            return
        }

        Info.findOne({where:{id:req.params.id}})
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            status.sendErr(res, err)
        })
    },

    update:(req,res)=>{

        if(!req.body){
            sendStatus(res)
            return
        }

        Info.update(req.body,{
            where: {id:req.body.id}
        })
        .then(num=>{
            sendConfirmation(res,num)
        })
        
    },

    delete:(req,res)=>{
        
        if(!req.params.id){
            sendStatus(res)
            return
        }

        Info.delete({
            where:{id:req.params.id}
        })
        .then(num=>{
            sendConfirmation(res,num)
        })
        .catch(err=>{
            sendErr(res,err)
        })
    },

    deleteAll:(req,res)=>{

        Info.destroy({
            where:{},
            truncat:false
        })
        .then(num=>{
            sendConfirmation(res,num)
        })
        .catch(err=>{
            sendErr(res,err)
        })
    }
}