const Pool = require("pg").Pool;

const pool = new Pool({
    user:'korospace',
    host:'127.0.0.1',
    database:'db_todo_rest',
    password:'031020',
    port:'5432'
})

module.exports = pool;