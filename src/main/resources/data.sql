DROP TABLE IF EXISTS user;

CREATE TABLE user (
	id INT AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(250) NOT NULL,
	password VARCHAR(250) NOT NULL
);

INSERT INTO user (username, password) VALUES
	('bob', '$2a$10$XpavH.xvX.xP7veNS.XxpuQk9hn8eJTINfiWneyNi7nmIkp6Vh4JW'); -- bob : asdQWE123
