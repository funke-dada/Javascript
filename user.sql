/*The total number of Users (i.e. count of all users) in the system. */
SELECT COUNT(id) FROM users

/*The total number of Users in the Accounting Department.*/
SELECT COUNT(id) FROM users
WHERE Department = ‘Accounting’

/*The total number of Users that have not activated their account */
SELECT COUNT(id) FROM users
WHERE Status <> ‘Activated’

/* List the first 5 Users that registered for an account in the system.*/
SELECT * FROM users
LIMIT 5;

/*All Users whose age is greater than 18 but less than 26.*/
SELECT * FROM users
WHERE age BETWEEN 18 AND 26

/*	All Users that registered for an account last week Thursday*/
SELECT * FROM users
WHERE created_dt = ‘06-01-2022’

/*All Users that registered for an account between last week Saturday and this week Monday.*/

SELECT * FROM users
WHERE created_dt BETWEEN ’08-01-2022’ AND ’10-01-2022’

/*Query to Activate all pending Users in the system*/
UPDATE User
SET status = “Activated”
WHERE status = “Pending”

/*Query to Update the User whose name is Tim to Timothy.*/
UPDATE user
SET name = “Timothy”
WHERE name = ”Tim”
/*Total Number of Users in each Department */
SELECT  Department, COUNT (*) as Total_Number_Of_Users
FROM users
GROUP BY Department
ORDER BY 1;
