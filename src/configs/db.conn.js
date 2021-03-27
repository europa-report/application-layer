const mysql = require('mysql2')
const dbConfig = require('./db.config')

module.exports = {
    
    conn:()=>{
        const connection = mysql.createConnection({
            host:dbConfig.HOST,
            user:dbConfig.USER,
            database:dbConfig.DB,
            password:dbConfig.PASSWORD
        })

        return connection
    }
}