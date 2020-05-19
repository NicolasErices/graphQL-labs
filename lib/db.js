'use stric'
const { MongoClient } = require('mongo')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env
const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
const connection

async function connectDB(){
    if(connection) return connection
    let client
    try {
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParse: true
        })
        connection = client.db(DB_NAME)
    }catch(err){
        console.error("no se logro connectar", err, mongoUrl);
        process.exist(1)
        
    }
    return connection
}

module.exports = connectDB;