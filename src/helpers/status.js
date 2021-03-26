module.exports = {

    sendStatus:(res)=>{

        res.status(400).send({
            message:'Content can not be empty!'
        })
    
        return
    },

    sendErr:(res, err)=>{
        res.status(500).send({
            message:
            err.message
        })
        return
    },

    sendConfirmation:(res, num)=>{

        num ? (res.send({message:"Operation executed successfully."}))
            : (res.send({message:"Operation execution failed."}))
        
            return
    }
}