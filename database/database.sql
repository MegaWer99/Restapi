CREATE DATABASE restapi;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    apellido VARCHAR(40),
    edad INTEGER,
    email TEXT
);

INSERT INTO users(nombre, apellido, edad, email) VALUES
('Juan', 'Narvaez', 24,'jsnw99999@gtmail.com'),
('Juan', 'Perez', 22, 'Jperez@gmail.com');