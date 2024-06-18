import { useContext } from "react";
import { Miarmariocontext } from "../../context/Miarmariocontext";
const Carro = () => {
  const { carro, setCarro, total_a_pagar } = useContext(Miarmariocontext);

  const sumaCantidad = (piezaAgregada) => {
    const carroActualizado = carro.map((indice) =>
      indice.id === piezaAgregada.id
        ? { ...indice, cantidad: indice.cantidad + 1 }
        : indice
    );
    setCarro(carroActualizado);
  };
  const restaCantidad = (piezaAgregada) => {
    if (piezaAgregada.cantidad === 1) {
      const confirmacion = window.confirm(
        "¿Deseas eliminar la Pieza del carro?"
      );
      carro.shift(piezaAgregada);
      if (!confirmacion) {
        return;
      }
    }
    const carroActualizado = carro.map((indice) =>
      indice.id === piezaAgregada.id && indice.cantidad > 1
        ? { ...indice, cantidad: indice.cantidad - 1 }
        : indice
    );
    setCarro(carroActualizado);
  };
  const calcularPrecioTotal = (piezaAgregada) => {
    const precioSeleccion = piezaAgregada.price * piezaAgregada.cantidad;
    return precioSeleccion.toLocaleString("cd");
  };
  return (
    <div>
      <h1 className="text-center mt-24 mb-8 font-medium text-4xl">
        Carro de compra
      </h1>
      {carro.length === 0 ? (
        <p className="text-center bg-red-300 w-80 mx-auto  mt-12 ">
          Carro Vacio
        </p>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center w-3/5  m-auto flex-wrap ">
          {carro.map((piezaAgregada) => (
            <div
              key={piezaAgregada.id}
              className="w-82 flex gap-3 justify-between items-center container m-auto flex-wrap mb-5"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <img
                  className="w-36 rounded-full"
                  src={piezaAgregada.img}
                  alt=""
                />
                <h3>{piezaAgregada.name.toUpperCase()}</h3>
              </div>
              <div className=" flex font-medium gap-3 items-center ">
                <p>{`$ ${calcularPrecioTotal(piezaAgregada)}`}</p>
                <div className="flex gap-2 items-center">
                  <button
                    className="px-2 py-1 border"
                    onClick={() => restaCantidad(piezaAgregada)}
                  >
                    -
                  </button>
                  <p className=" border p-1 px-3"> {piezaAgregada.cantidad}</p>
                  <button
                    className="px-2 py-1 border"
                    onClick={() => sumaCantidad(piezaAgregada)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col">
            <p className="font-bold">{`Total a pagar: $${total_a_pagar}`}</p>
            <button className="flex items-center gap-1 mt-10 mx-auto border border-neutral-500 px-4 py-2 rounded-xl bg-green-300">
              Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Carro;
