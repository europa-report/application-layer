const db = require('../configs/db.conn')
const status = require('../helpers/status')
const {sendStatus, sendErr, sendConfirmation } = status

module.exports = {

    create:(req, res)=>{
        
        if(!req.body.name){
            sendStatus(res)
            return
        }

        db.conn().promise().query('insert into lookups (name, abbreviation) values (?,?)',
        [req.body.name, req.body.abbreviation],
        (err, results)=>{
            if(err) {sendErr(res, err)}
            else {res.send({result:results})}
        }).then(([rows,fields])=>{
            console.log(rows)
            res.send({result:rows})
        }).catch(()=>sendErr(res,err))
        .then(()=>db.conn().end())

    },

    getAll:(req,res)=>{

        db.conn().promise().query('select * from lookups',(err, results)=>{
            if(err){sendErr(res,err)}
            else{res.send({result:results})}
        }).then(([rows,fields])=>{
            console.log(rows)
        }).catch(()=>{sendErr(res,err)})
        .then( ()=>db.conn().end())

    },

    getOne:(req,res)=>{

        if(!req.body.name){
            sendStatus(res)
            return
        }

        db.conn().query('select * from lookups where id = ?',
        [req.body.id],
        (err,results)=>{
            if(err){sendErr(res,err)}
            else{res.send({result:results})}
        }).then(()=>{
            console.log(results)
            res.send({result:results})
        }).catch(()=>{sendErr(res,err)})
        .then(()=>db.conn().end())

    },

    update:(req,res)=>{

        if(!req.body){
            sendStatus(res)
            return
        }

        db.conn().query('update set name = ? , addreviation = ? where id = ?',
        [req.body.name, req.body.abbreviation, req.body.id],
        (err,results)=>{
            if(err){sendErr(res,err)}
            else{res.send({result:results})}
        }).then(()=>{
            console.log(results)
        }).catch(()=>{sendErr(res,err)})
        .then(()=>db.conn().end())
    },

    delete:(req,res)=>{
        
        if(!req.params.id){
            sendStatus(res)
            return
        }

        db.conn().query('delete from lookups where id = ?',
        [req.body.id],
        (err,results)=>{
            if(err){sendErr(res,err)}
            else{console.log(results)}
        }).then(()=>{
            console.log(results)
        }).catch(()=>{sendErr(res,err)})
        .then(()=>db.conn().end())

    },

    deleteAll:(req,res)=>{


        db.conn().query('delete from lookups',
        (err,results)=>{
            if(err){sendErr(res,err)}
            else{console.log(results)}
        }).then(()=>{
            console.log(results)
        }).catch(()=>{sendErr(res,err)})
        .then(()=>db.conn().end())

    }

}