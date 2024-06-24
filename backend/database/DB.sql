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

INSERT INTO productos (id, descripcion, img, caracteristicas, name, price, cantidad) VALUES
  (DEFAULT,
  'Sweater de lana Mohair tejido y bordado a mano. Diseño exclusivo. Medidas aproximadas pueden variar ya que es un articulo tejido a mano.',
  'https://pontetu.cl/cdn/shop/files/agustina-saquer-invierno-241453-2df748c01b696570ef17114705816707-1024-1024.webp?crop=center&height=1350&v=1715867740&width=900',
  'Medidas: Contorno de busto 51 cms, largo delantero 62 cms.',
  'SWEATER ROLLING',
  8900,
  10);

INSERT INTO productos (id, descripcion, img, caracteristicas, name, price, cantidad) VALUES
  (DEFAULT,
  'Morral de cuero genuino, bolsillo frontal con cierre y apliques en cuero metalizado. En su interior forro gross y un bolsillo también con cierre.',
  'https://pontetu.cl/cdn/shop/products/image_69e5bf15-3599-49a0-af58-370ad6dd1320.jpg?crop=center&height=900&v=1652913083&width=600',
  'Medidas: 24 cm ancho x 20 cm alto x 10 cm profundidad.',
  'RIÑONERA KISS',
  15990,
  8);

INSERT INTO productos (id, descripcion, img, caracteristicas, name, price, cantidad) VALUES
  (DEFAULT,
  'Remera de jersey de algodón estampada y bordada con hilo y lentejuelas',
  'https://pontetu.cl/cdn/shop/products/image_69e5bf15-3599-49a0-af58-370ad6dd1320.jpg?crop=center&height=900&v=1652913083&width=600',
  'Medidas: Talla S - Contorno de busto: 48 cm, Largo total 64 cm. talla M -  Contorno de busto: 50 cm, Largo total 66 cm.',
  'REMERA SAVAGE - ROSA',
  7990,
  3);

INSERT INTO productos (id, descripcion, img, caracteristicas, name, price, cantidad) VALUES
  (DEFAULT,
  'La remera perfecta existe y se llama GRANADA!!! está confeccionada en spum de algodón, es manga corta y con escote redondo. Lo espectacular es que tiene la espalda plisada!!! Lo que le da un movimiento divino! Esta remera SOLO SE PUEDE LAVAR A MANO MUY SUAVE.',
  'https://pontetu.cl/cdn/shop/files/dsc_6270-ee3ce21d0a2aa6e4c517012056178238-1024-1024.webp?v=1701266350',
  'Medidas: Viene en dos talles: S y M. El talle en esta remera es amplio, el talle S es para xs/s y el M para m/l.',
  'Remera Granada Print Tostado',
  17990,
  1);

INSERT INTO productos (id, descripcion, img, caracteristicas, name, price, cantidad) VALUES
  (DEFAULT,
  'Vestido confeccionado en satén estampado. incluye reguladores, espalda cavada, corte amplio tipo A. 100% satén premium. El artículo incluye una tira en la espalda la cual se puede cortar o dejar, es a gusto del cliente',
  'https://pontetu.cl/cdn/shop/files/RENEELOOKBOOKDIC_2023372_f7c5ec70-db07-43fe-8445-5505573e877b.webp?v=1703602266',
  'Medidas: Talle único. Contorno de busto 86 CM. Contorno de cadera 116 CM. Largo total 80 CM. Profundidad escote espalda 34 CM. Largo total de bretel 105 CM',
  'VESTIDO EMMA CAMO',
  5990,
  5);

INSERT INTO productos (id, descripcion, img, caracteristicas, name, price, cantidad) VALUES
  (DEFAULT,
  'La falda de sarga que no te puede faltar esta temporada! Es tiro alto y corte en "A". Posee un bolsillo cargo en su lateral y cintura jenera. Es super canchera y comoda!  Te vas a enamorar, a nosotras ya nos paso!!',
  'https://pontetu.cl/cdn/shop/files/dsc_6739-b4d60001b797c7e90117012088176885-1024-1024.webp?v=1701265514',
  'Medidas: Composición: 50% algodón, 50% poliéster. Referencia modelo Belu: Altura: 1,68 Talle S.',
  'Falda Oslo Cherry Tostado',
  10990,
  6);

