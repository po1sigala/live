CREATE DATABASE inventory_db;

-- Create two new databases --
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

-- Use inventory_db --
USE inventory_db;

-- See database in use --
SELECT DATABASE();
