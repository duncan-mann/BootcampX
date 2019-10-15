SELECT teachers.name as teacher, 
cohorts.name as cohort,
count(assistance_requests.*)
FROM teachers 
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teacher;