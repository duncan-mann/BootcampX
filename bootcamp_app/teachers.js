const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let args = process.argv.slice(2);
let cohortName = args[0];

const query = {
    text: `SELECT DISTINCT teachers.name as teacher, 
    cohorts.name as cohort
    FROM teachers 
    JOIN assistance_requests ON teacher_id = teachers.id
    JOIN students ON assistance_requests.student_id = students.id
    JOIN cohorts ON students.cohort_id = cohorts.id
    WHERE cohorts.name = $1
    ORDER BY teacher;`,
    values : [`${cohortName}`]
}

pool
  .query(query)
  .then(res => console.log(res.rows))
  .catch(e => console.error(e.stack))
