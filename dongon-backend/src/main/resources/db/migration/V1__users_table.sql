CREATE TABLE users (
    id BIGSERIAL NOT NULL,
    email varchar(255) NOT NULL,
    "password" varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    CONSTRAINT uk_email UNIQUE (email),
    CONSTRAINT uk_username UNIQUE (username),
    CONSTRAINT users_pkey PRIMARY KEY (id)
);
