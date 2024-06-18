import { useContext } from "react";

import { Miarmariocontext } from "../../context/Miarmariocontext";
import { Link, useParams } from "react-router-dom";
import "./SeleccionaProducto.css";

const SeleccionaProducto = () => {
  const { productos, cargando, agregarAlCarro } = useContext(Miarmariocontext);
  const { id } = useParams();
  if (cargando) {
    return (
      <div className="text-center mt-48 text-4xl font-medium">
        Mostrando productos...
      </div>
    );
  }
  const handleAgregarAlCarro = (producto) => {
    agregarAlCarro(producto);
  };
  return (
    <>
      <h2 className="text-center my-8 text-5xl font-bold">Productos</h2>
      <div className=" container mx-auto gap-10 grid-productos text-center">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="border border-gray-300 rounded-full"
            style={{ width: "21rem" }}
          >
            <img
              className="rounded-full"
              src={producto.img}
              alt={`producto ${id}`}
            />
            <div className="p-3">
              <div>
                <h1 className=" text-2xl font-bold border-b-2">
                  {producto.name.toUpperCase()}
                </h1>
              </div>
              <h3 className="text-lg font-medium mt-3">Caracteristicas:</h3>
              <ul className="ml-4 list-disc">
                {producto.ingredients?.map((ingrediente, indice) => (
                  <li className="list-none" key={indice}>
                    {ingrediente}
                  </li>
                ))}
              </ul>
              <p className="text-center text-2xl font-bold border-t-2 m-3">
                {`$ ${producto.price.toLocaleString("cd")}`}
              </p>
              <div className="flex justify-around card-body">
                <Link
                  to={`producto/${producto.id}`}
                  className="bg-ros border bg-yellow-400 border-neutral-500 px-4 py-2 rounded-xl"
                >
                  Caracteristicas
                </Link>
                <button
                  onClick={() => handleAgregarAlCarro(producto)}
                  className="px-4 py-2 bg-red-400 rounded-xl"
                >
                  Agregar al carro
                </button>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};
export default SeleccionaProducto;
