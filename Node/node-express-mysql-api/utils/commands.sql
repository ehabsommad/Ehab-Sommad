DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
    id BIGINT(16) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);


DROP TABLE IF EXISTS notes;
CREATE TABLE IF NOT EXISTS notes(
    id BIGINT(16) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    info VARCHAR(200) NOT NULL,
    user_id BIGINT(16) UNSIGNED,
    FOREIGN KEY (user_id) references users(id) 
);

INSERT INTO users(name,email,password) VALUES ('First User','first@email.com','123123'); 
INSERT INTO users(name,email,password) VALUES ('Second User','second@email.com','123123'); 
INSERT INTO users(name,email,password) VALUES ('Third User','third@email.com','123123'); 

