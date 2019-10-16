const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let args = process.argv.slice(2);
let month = args[0];
let maxResults = args[1];

const query = { 
    text: `SELECT students.id, students.name, cohorts.name
    FROM students
    JOIN cohorts ON cohorts.id = students.cohort_id
    WHERE cohorts.name LIKE $1
    LIMIT $2;`,
    values : [`%${month}%`, `${maxResults}`]
}

pool
  .query(query)
  .then(res => console.log(res.rows))
  .catch(e => console.error(e.stack))
