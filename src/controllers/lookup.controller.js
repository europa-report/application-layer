const db = require('../models')
const Lookup = db.lookups

module.exports = {

    create:(req, res)=>{
        

        req.body ? 
        models.create(req.body)
        .then(data =>{
            console.log(data.dataValues.id)
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
            err.message || "Some error occurred while creating the Lookup"
            })
        }):
        ()=>{
            res.status(400).send({
                message:"Content can not be empty!"
            })
            return
        }
    },

    getAll:(req,res)=>{

        const name = 'includeInfo' in req.query ?
        Lookup.findAll({include: info}):
        Lookup.findAll()
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Error retrieving Lookup's data."
            })
        })
    },

    getOne:(req,res)=>{

        req.params.name ? 
        Lookup.findOne({where:{name:req.params.name}})
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:"Error finding a name of Lookup"
            })
        }):
        ()=>{
            res.status(400).send({
                message:"Content can not be empty!"
            })
            return
        }
    },

    update:(req,res)=>{

        req.body ?
        Lookup.update(req.body,{
            where: {name:req.body.name}
        })
        .then(num =>{
            
            num ? (res.send({message:"Succesfully update"}))
            : (res.send({message:"Failed update"}))
        })
        .catch(err =>{
            res.status(500).send({
                message:'Error in update Lookup'
            })
        }):
        ()=>{
            res.status(400).send({
                message:"Content can not be empty!"
            })
            return
        }
    },

    delete:(req,res)=>{
        
        req.params?
        Lookup.delete(
            {
                where:{id: req.params.id}
            })
            .then(num=>{
                num ? (res.send({message:"Succesfully update"}))
            : (res.send({message:"Failed update"}))
            })
            .catch(err =>{
                res.status(500).send({
                    message:'Error in delete Lookup'
                })
            }):
            ()=>{
                res.status(400).send({
                    message:"Content can not be empty!"
                })
                return
            }
    },

    deleteAll:(req,res)=>{
        Lookup.destroy({
            where:{},
            truncat:false
        })
        .then(num =>{
            num ? (res.send({message:"Succesfully deleted all"}))
            : (res.send({message:"Failed deleted all"}))
        })
        .catch(err =>{
            res.status(500).send({
                message:'Error in delete Lookups'
            })
        })
    }

}