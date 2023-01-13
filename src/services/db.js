const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params){
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);

    return results;
}

async function transactionalQuery(queryArray){
    
}

function getConnection(){
    return mysql.createPool(config.db).getConnection();
}

module.exports = {
    query,
    getConnection
}