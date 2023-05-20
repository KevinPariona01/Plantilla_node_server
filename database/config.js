//const  Pool  = require('pg').Pool//CONEXTION A POSTGRESQL

const pool = new Pool({

    user: 'postgres',
    host: 'localhost',
    database: '',
    password: '',
    port: 5432,

});

module.exports={
    pool
}