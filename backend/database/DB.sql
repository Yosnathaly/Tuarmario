CREATE DATABASE armario;

\c armario;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE productos (
  id        SERIAL        NOT NULL,
  descripcion     VARCHAR(255)   NOT NULL UNIQUE,
  img  VARCHAR(255)   NOT NULL,
  ingredients VARCHAR(255)   NOT NULL,
  name VARCHAR(255)   NOT NULL,
  price int NOT NULL,
  cantidad int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO productos (
DEFAULT, "descripcion", "urlIMG", "ingredientes", "nombre", 100, 55)
