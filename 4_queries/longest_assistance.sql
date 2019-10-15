SELECT cohorts.name as cohort, avg(completed_at - started_at) as avg_durations
FROM assistance_requests
JOIN students ON student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id 
GROUP BY cohorts.name
ORDER BY avg_durations DESC
LIMIT 1;