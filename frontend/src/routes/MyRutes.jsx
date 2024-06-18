import { Route, Routes } from "react-router-dom";
import PaginaInicio from "../pages/PaginaInicio/PaginaInicio";
import Carro from "../pages/Carro/Carro";
import DetalleProducto from "../pages/DetalleProducto/DetalleProducto";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PaginaPrivada from "../pages/PaginaPrivada/PaginaPrivada";

const MyRoutes = () => {
	return (
		<Routes>
			<Route path="/pmarket_ropa" element={<PaginaInicio />}></Route>
			<Route path="/pmarket_ropa/producto/:id" element={<DetalleProducto />}></Route>
			<Route path="/pmarket_ropa/carro" element={<Carro />}></Route>
		{	<Route path="/pmarket_ropa/login" element={<Login />} />}
			<Route path="/pmarket_ropa/register" element={<Register />} />
			<Route path="/pmarket_ropa/paginaprivada" element={<PaginaPrivada />} />
			<Route path="*" element={<PaginaInicio />}/>
		</Routes>		
	);
};
export default MyRoutes;
