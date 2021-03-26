const chalk = require('chalk')
const io = require('../helpers/io')
const {red,green,yellow} = chalk

module.exports = {

    sendStatus:(res)=>{

        getMsg = {message:'Content can not be empty!'}
        console.log(yellow(getMsg))
        io.writeToFile(yellow(getMsg),'CORRUPTED')
        res.status(200).send({message:'success'})

        return
    },

    sendErr:(res, err)=>{

        console.log(red.bold(err.message))
        io.writeToFile(red.bold(err.message),'ERROR')
        res.status(200).send({message:'success'})

        return
    },

    sendConfirmation:(res, num)=>{

        num ? (res.send({message:"Operation executed successfully."}))
            : (res.send({message:"Operation execution failed."}))
        
            return
    }
}