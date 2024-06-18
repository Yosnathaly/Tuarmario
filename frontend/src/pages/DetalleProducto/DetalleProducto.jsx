import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Miarmariocontext } from "../../context/Miarmariocontext";
const DetalleProducto = () => {
  const { id } = useParams();
  const { productos, cargando, agregarAlCarro } = useContext(Miarmariocontext);
  const producto = productos.find(
    (productoFiltrada) => productoFiltrada.id == id
  );
  if (cargando) {
    return (
      <div className="text-center mt-48 text-4xl font-medium">
        Cargando Características...
      </div>
    );
  }
  const handleAgregarAlCarro = () => {
    agregarAlCarro(producto);
  };
  return (
    <>
      <h2 className=" text-4xl text-center font-medium mt-24">
        Característica
      </h2>
      {!producto ? (
        <p className="text-center bg-red-300 w-96 mx-auto text-red-700 mt-32 rounded-xl">
          Error, no tiene características...
        </p>
      ) : (
        <div>
          <div className="container mx-auto  mt-12 py-3 flex flex-wrap justify-center">
            <img
              src={producto?.img}
              className=" border-slate-400 w-96 rounded-full"
              alt={`producto ${id}`}
            />
            <div className="flex flex-col px-3 py-3 justify-between w-96 gap-3 rounded-tr-lg rounded-br-lg border-slate-400">
              <h1 className="text-2xl font-medium">
                {producto?.name.toUpperCase()}
              </h1>
              <p>{producto?.desc}</p>
              <h3 className="text-xl font-bold">Características:</h3>
              <ul className="ml-4 list-disc">
                {producto.detalle?.map((detalles, i) => (
                  <li key={i}>{detalles}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <p className="font-bold text-2xl">
                  Precio: {`$${producto?.price}`}
                </p>
                <button
                  onClick={handleAgregarAlCarro}
                  className="px-4 py-2 bg-red-400 rounded-xl"
                >
                  Agregar al carro
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetalleProducto;
