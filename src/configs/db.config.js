module.exports = {
    
    HOST:'localhost',
    USER: 'root',
    PASSWORD: 'Dare7devil',
    DB:'subreddit',
    dialect:'mysql',
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}