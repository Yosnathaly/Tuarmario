const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");
const productos = require("../frontend/public/api_json/productos.json")
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
