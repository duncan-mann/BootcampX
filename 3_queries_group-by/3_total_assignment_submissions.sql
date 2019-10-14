SELECT cohorts.name as cohort_name, COUNT(assignment_submissions.*) as total_submissions
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
GROUP BY cohorts.name
ORDER BY COUNT(assignment_submissions.*) DESC;
