SELECT *
FROM course_names;

SELECT department, COUNT(id) AS number_courses
FROM course_names; 

SELECT department, COUNT(id) AS number_courses
FROM course_names
GROUP BY department;

SELECT department, SUM(total_enrolled AS total_enrolled
FROM course_names
GROUP BY department;
