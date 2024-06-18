CREATE DATABASE armario;

\c armario;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO usuarios (
  
)
