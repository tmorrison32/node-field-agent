const db = require('./db');

function emptyOrOne(rows){
    if(!rows){
        return {};
    }

    return rows[0];
}


function emptyOrRows(rows){
    if(!rows) return [];

    return rows;
}

async function getAll(){
    const rows = await db.query(
        `Select * from agent`
    );
    
    return emptyOrRows(rows);
}

async function getOne(id){
    const rows = await db.query(
        `Select * from agent where agent_id=${id}`
    );

    return emptyOrOne(rows);
}

module.exports = {
    getAll,
    getOne,
    // create,
    // update,
    // deleteOne,
}