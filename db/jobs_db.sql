CREATE DATABASE  jobs_db;
USE jobs_db;

    CREATE TABLE new_job (
        id INTEGER(11) AUTO_INCREMENT NOT NULL,
        name VARCHAR(100),
        date DATETIME  NOT NULL,
        PRIMARY KEY (id)
    );
    
    INSERT INTO new_job (name, date)
    VALUE ("TTT","2019-07-10 01:00:18");