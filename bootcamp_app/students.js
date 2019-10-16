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

pool.query(`
SELECT students.id, students.name, cohorts.name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${month}%'
LIMIT ${maxResults};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));