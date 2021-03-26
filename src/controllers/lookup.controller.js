const db = require('../models')
const Lookup = db.lookups
const Op = db.Sequelize.Op
// const Lookup = require('../models/Lookup.model')
// const info = require('../models/info.model')


    exports.create=(req, res)=>{
        // if(!req.body){
        //     res.status(400).send({
        //         message: "Content can not be empty!"
        //     })
        //     return
        // }

        console.log('Did I arrive here?')

        // req.body ? 
        // models.create(req.body)
        // .then(data =>{
        //     console.log(data.dataValues.id)
        //     res.send(data)
        // })
        // .catch(err =>{
        //     res.status(500).send({
        //         message:
        //     err.message || "Some error occurred while creating the Lookup"
        //     })
        // }):
        // ()=>{
        //     res.status(400).send({
        //         message:"Content can not be empty!"
        //     })
        //     return
        // }

        // const Lookup = {
        //     name: req.body.name,
        //     abbreviation:req.body.abbreviation
        // }

        // Lookup.create(Lookup).then(data =>{
        //     console.log(data.dataValues.id)
        //     res.send(data)
        // }).catch(err =>{
        //     res.status(500).send({
        //         message:
        //     err.message || "Some error occurred while creating the Lookup"
        //     })
        // })
    },

    exports.getAll=(req,res)=>{

        // const name = req.query.name

        // var condition = name ? {name: {[Op.like]: `%${name}%`}} : null

        // Lookup.findAll({where:condition})
        // .then(data =>{
        //     res.send(data)
        // })
        // .catch(err =>{
        //     res.status(500).send({
        //         message:
        //         err.message || "Error retrieving Lookup's data."
        //     })
        // })

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

    exports.getOne=(req,res)=>{

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

    exports.update=(req,res)=>{

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

    exports.delete=(req,res)=>{
        
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

    exports.deleteAll=(req,res)=>{
        Lookup.destroy({
            where:{},
            truncat:false
        })
        .then(num =>{
            res.send({message:'All Lookup is successfully deleted'})
        })
        .catch(err =>{
            res.status(500).send({
                message:'Error in delete Lookup'
            })
        })
    }