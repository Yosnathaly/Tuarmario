const bcrypt = require('bcryptjs')
const { pool } = require("./database/connection.js");


const getProductos = async () => {
    const { rows: productos } = await pool.query("SELECT * FROM productos")
    return productos
}

const deleteProducto = async (id) => {
    const consulta = "DELETE FROM productos WHERE id = $1"
    const values = [id]
    const { rowCount } = await pool.query(consulta, values)
    if (!rowCount) throw { code: 404, message: "No se encontró ningún producto con este ID" }
}

const verificarCredenciales = async (email, password) => {
    const values = [email]
    const consulta = "SELECT * FROM usuarios WHERE email = $1"
    const { rows: [usuario], rowCount } = await pool.query (consulta, values)
    const { password: passwordEncriptada} = usuario
    const passwordCorrecta = bcrypt.compareSync(password, passwordEncriptada)
    if (!passwordCorrecta || !rowCount)
        throw {code: 401, message: "Email o contraseña incorrecta"}
}

const registrarUsuario = async (usuario) => {
    let { email, password } = usuario
    const passwordEncriptada = bcrypt.hashSync(password)
    password = passwordEncriptada
    const values = [email, passwordEncriptada]
    const consulta = "INSERT INTO usuarios values (DEFAULT, $1, $2)"
    await pool.query(consulta, values)
}
// arreglar para subir producto
const agregarProducto = async (producto) => {
    let {  } = producto
    const passwordEncriptada = bcrypt.hashSync(password)
    password = passwordEncriptada
    const values = [email, passwordEncriptada]
    const consulta = "INSERT INTO productos values (DEFAULT, $1, $2)"
    await pool.query(consulta, values)
}

module.exports = { getProductos, deleteProducto, verificarCredenciales, registrarUsuario, agregarProducto }
