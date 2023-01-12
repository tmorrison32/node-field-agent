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

async function create(agent){

    const result = await db.query(`
        insert into agent
        (first_name, middle_name, last_name, dob, height_in_inches)
        values
        ("${agent.firstName}", "${agent.lastName}", "${agent.middleName}",
         "${agent.dob}", ${agent.heightInInches})
    `);

    let message = "Error creating new agent";

    if(result.affectedRows){
        message = "Success adding new agent";
    }

    return {message};
}

async function update(agentId, agent){
    const result = await db.query(`
        update agent
        set first_name="${agent.firstName}",
        middle_name="${agent.middleName}",
        last_name="${agent.lastName}",
        dob="${agent.dob}",
        height_in_inches=${agent.heightInInches},
        where agent_id=${agentId}
    `);

    let message = `Error updating agent with id ${agentId}`

    if(result.affectedRows){
        message = `Success updating agent with id ${agentId}`
    }

    return {message};
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    // deleteOne,
}