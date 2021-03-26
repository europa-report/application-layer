const fs = require('fs')
const dates = require('../helpers/date')

module.exports = {

   writeToFile:(content, file)=>{

       fs.appendFileSync(`./src/logs/${dates.fileDate()+'-'+file}.log`,file+':'+content+'\n',{flag:'a'}, err=>{
            if (err) {

                console.error(err)
                return
            }
        })

        
    }
}