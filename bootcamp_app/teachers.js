const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let args = process.argv.slice(2);
let cohortName = args[0];


pool.query(`
SELECT DISTINCT teachers.name as teacher, 
cohorts.name as cohort
FROM teachers 
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = '${cohortName}'
ORDER BY teacher;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));
