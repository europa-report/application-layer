const db = require('../configs/db.conn')
const status = require('../helpers/status')
const { sendStatus, sendConfirmation, sendErr } = require('../helpers/status')

module.exports = {

    create:(req, res)=>{

        if(!req.body){
            sendStatus(res)
            return
        }

        db.conn().promise().query('insert into infos (date, subscribers, active_subscribers, submission, comments, lookupId) values (?,?,?,?,?,?)',
        [req.body.date, req.body.subscribers, 
            req.body.active_subscribers, req.body.submission, 
            req.body.comments, req.body.lookupId],
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

        db.conn().promise().query('select * from infos',(err, results)=>{
            if(err){sendErr(res,err)}
            else{res.send({result:results})}
        }).then(([rows,fields])=>{
            console.log(rows)
        }).catch(()=>{sendErr(res,err)})
        .then( ()=>db.conn().end())
    },

    getOne:(req,res)=>{
        
        if(!req.params.id){
            sendStatus(res)
            return
        }

        db.conn().promise().query('select * from infos where id = ?',
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

        db.conn().promise().query('update set date = ? , subscribers = ?, active_subscribers = ?, submission = ?, comments = ? where id = ?',
        [req.body.date, req.body.subscribers, 
            req.body.active_subscribers, req.body.submission, 
            req.body.comments],
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

        db.conn().promise().query('delete from infos where id = ?',
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

        db.conn().promise().query('delete from infos',
        (err,results)=>{
            if(err){sendErr(res,err)}
            else{console.log(results)}
        }).then(()=>{
            console.log(results)
        }).catch(()=>{sendErr(res,err)})
        .then(()=>db.conn().end())
    }
}