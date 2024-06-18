import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types";

export const Miarmariocontext = createContext();

export const Miarmario_Provider = ({ children }) => {
		const [cargando, setCargando] = useState(true);
		const [productos, setProductos] = useState([]);
		const [carro, setCarro] = useState([]);

	useEffect(() => {
		const getProductos = async () => {
			try {
				const resuLtado = await fetch("/api_json/productos.json");
				const informAcion = await resuLtado.json();
				if (informAcion) {
					setProductos(informAcion);
					setCargando(false);
				}
			} catch (error) {
				console.error("Error al cargar información", error);
			}
		};
		getProductos();
	}, []);

	const agregarAlCarro = (producto) => {
		const productoEnCarro = carro.find((indice) => indice.id === producto.id);
		if (productoEnCarro) {
			const nuevoCarro = carro.map((indice) => (indice.id === producto.id ? { ...indice, cantidad: indice.cantidad + 1 } : indice));
			setCarro(nuevoCarro);
		} else {
			setCarro([...carro, { ...producto, cantidad: 1 }]);
		}
	};

	const totalProductos = carro.reduce((totalProductos, producto) => totalProductos + producto.cantidad, 0);
    const total_a_pagar = carro.reduce((total_a_pagar, producto) => total_a_pagar + producto.price * producto.cantidad, 0).toLocaleString('es-ES')

	const dataProvider = {
							productos,
							cargando,
							carro,
							setCarro,
							agregarAlCarro,
							totalProductos,
							total_a_pagar
    					};
	return <Miarmariocontext.Provider value={dataProvider}>{children}</Miarmariocontext.Provider>;
};
Miarmario_Provider.propTypes = 	{
								children: PropsTypes.object.isRequired,
							};