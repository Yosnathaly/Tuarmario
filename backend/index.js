const express = require("express");
const app = express();
const env = require("dotenv").config();
const cors = require("cors");
const productos = require("./productos.json")
const { pool } = require("./database/connection.js");
const jwt = require("jsonwebtoken");
const { getProductos, deleteProductos, verificarCredenciales, registrarUsuario } = require('./consultas')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});

app.use(cors());
app.use(express.json());

// Llamado al json local
// app.get ("/productos", (req, res) => {
//   res.status(200).send(productos)
// })

// Llamado a la db
app.get("/productos", async (req, res) => {
  try {
      const productos = await getProductos()
      res.json(productos)
  } catch (error) {
      res.status(error.code || 500).send(error)
  }
})

app.get ("/productos/:id", (req, res) => {
  res.status(200).send(productos)
})

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

app.post ("/login", async (req, res) => {
  try {
      const { email, password } = req.body
      await verificarCredenciales(email, password)
      const token = jwt.sign({ email }, "az_AZ", { expiresIn: 60})
      res.send(token)
  } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
  }
})

app.post ("/usuarios", async (req, res) => {
  try {
      const usuario = req.body
      await registrarUsuario(usuario)
      res.send("Usuario creado con exito")
  } catch (error) {
      res.status(500).send(error)
  }
})

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

// utiliza token para verificar, falta ejecutar el delete
// app.delete ("/productos/:id", async (req, res) => {
//   try {
//       const { id } = req.params
//       const Authorization = req.header("Authorization")
//       const token = Authorization.split("Bearer ")[1]
//       jwt.verify(token, "az_AZ")
//       const { email } = jwt.decode(token)
//       res.send(`El usuario ${email} ha eliminado el evento de id ${id}`)
//   } catch (error) {
//       res.status(error.code || 500).send(error)
//   }
// })


app.use("*", (req, res) => {
  res.status(404).send({ message: "La ruta que intenta consultar no existe" })
});
