const request = require("supertest");
const app = require("../index");

describe("Operaciones CRUD de Tuarmario", () => {

  it("Test get", async () => {
    const response = await request(app).get("/productos").send();
    const status = response.statusCode;
    const body = response.body;
    expect(status).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(typeof body[0]).toBe("object");
  });

  it("Test delete", async () => {
    const nonExistentId = 999;
    const response = await request(app)
      .delete(`/productos/${nonExistentId}`)
      .set('Authorization', 'Bearer token_valido') 
      .send();
    const status = response.statusCode;
    if (status === 401) {
      console.log("Token no válido o no proporcionado");
    } else if (status === 404) {
      console.log(`Producto con ID ${nonExistentId} no encontrado`);
    }
    expect(status).toBe(404); 
  });
  
  

  it("Test post", async () => {
    const newProducto = {
      descripcion: "Poncho beige a crochet",
      img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caracteristicas: "Poncho beige a crochet Talla M",
      name: "Poncho Beige",
      price: 5000,
      cantidad: 1
    };
    const response = await request(app).post("/productos").send(newProducto);
    const status = response.statusCode;
    const body = response.body;
    expect(status).toBe(201);
    expect(Array.isArray(body)).toBe(true);
    expect(body.find(producto => producto.descripcion === newProducto.descripcion)).toBeTruthy();
  });

  it("Test put", async () => {
    const productoId = 1;
    const payload = {
      id: 2,
      descripcion: "Chaqueta cobre",
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caracteristicas: "Chaqueta color cobre Talla M",
      name: "Chaqueta cobre",
      price: 7500,
      cantidad: 1
    };
    const response = await request(app).put(`/productos/${productoId}`).send(payload);
    const status = response.statusCode;
    expect(status).toBe(400);
  });
});
