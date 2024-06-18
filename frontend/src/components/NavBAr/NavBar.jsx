import { useContext } from "react";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";
import { Miarmariocontext } from "../../context/Miarmariocontext";

const NavBar = () => {
	const {totalProductos} = useContext(Miarmariocontext)
	return (
		<nav className="flex flex-row gap-5 justify-around items-center bg-cyan-400 bg-opacity-80 backdrop-blur-md flex-wrap px-5 nav_container fixed top-0 w-full z-10 ">
			<div>
				<Link to={"/pmarket_ropa/"}>Tu Armario!!</Link>
			</div>
			<ul className="flex gap-5 font-medium">
				<li>
					<NavLink to={"/pmarket_ropa/"}>Inicio</NavLink>
				</li>
				<li>
				<NavLink to={"/pmarket_ropa/carro"}>{`Carro (${totalProductos})`}</NavLink>
                </li>
				<li>
				<NavLink to={"/pmarket_ropa/login"}>Login</NavLink>
                </li>
				<li>
				<NavLink to={"/pmarket_ropa/paginaprivada"}>Mi Cuenta</NavLink>
                </li>
			</ul>
		</nav>
	);
};

export default NavBar;