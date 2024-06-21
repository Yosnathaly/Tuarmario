CREATE DATABASE armario;

\c armario;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  PRIMARY KEY (id)
);

-- USAR COMILLAS SIMPLES '
INSERT INTO usuarios VALUES 
(DEFAULT, 'Admin@admin.com', 123456);

CREATE TABLE productos (
  id        SERIAL        NOT NULL,
  descripcion     VARCHAR(255)   NOT NULL UNIQUE,
  img  VARCHAR(255)   NOT NULL,
  caracteristicas VARCHAR(255)   NOT NULL,
  name VARCHAR(255)   NOT NULL,
  price int NOT NULL,
  cantidad int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO productos (id, descripcion, img, caracteristicas, name, price, cantidad) VALUES
  (DEFAULT,
  'Sweater escote redondo con jacquard exclusivo millie . Lleva goma millie. Composición: 80% ALGODÓN 10% POLIAMIDA 10% POLIESTER',
  'https://pontetu.cl/cdn/shop/files/MILLIE_0112.jpg?v=1695412135',
  'Medidas: Ancho: 55 cm, Largo: 46 cm, Sisa: 20 cm',
  'SWEATER BEACH VERDE',
  8900,
  5);
