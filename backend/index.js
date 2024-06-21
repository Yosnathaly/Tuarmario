const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");
const productos = require("./productos.json")
const { pool } = require("./database/connection.js");
const jwt = require("jsonwebtoken");
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});

app.use(cors());
app.use(express.json());

app.get ("/productos", (req, res) => {
  res.status(200).send(productos)
})

// app.get ("/productos/:id", (req, res) => {
//   res.status(200).send(productos)
// })

app.post("/productos", (req, res) => {
  const producto = req.body
  const { id } = producto
  const existeUnproductoConEseId = productos.some(c => c.id == id)
  if (existeUnproductoConEseId) res.status(400).send({ message: "Ya existe un producto con ese id" })
  else {
    productos.push(producto)
      res.status(201).send(productos)
  }
});

app.put("/productos/:id", (req, res) => {
  const producto = req.body;
  const { id } = req.params;
  if (id != producto.id)
      return res
          .status(400)
          .send({
              message: "El id del parámetro no coincide con el id del producto recibido",
          });

  const productoIndexFound = productos.findIndex((p) => p.id == id);
  if (productoIndexFound >= 0) {
      productos[productoIndexFound] = producto;
      res.send(productos);
  } else {
      res
          .status(404)
          .send({ message: "No se encontró ningún producto con ese id" });
  }
});

app.delete("/productos/:id", (req, res) => {
  const jwt = req.header("Authorization")
  if (jwt) {
      const { id } = req.params
      const productoIndexFound = productos.findIndex(c => c.id == id)

      if (productoIndexFound >= 0) {
          productos.splice(productoIndexFound, 1)
          console.log(productoIndexFound, productos)
          res.send(productos)
      } else {
          res.status(404).send({ message: "No se encontró ningún producto con ese id" })
      }

  } else res.status(400).send({ message: "No recibió ningún token en las cabeceras" })
});


app.use("*", (req, res) => {
  res.status(404).send({ message: "La ruta asdasdsque intenta consultar no existe" })
});
