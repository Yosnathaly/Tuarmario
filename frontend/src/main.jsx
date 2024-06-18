import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Miarmario_Provider } from "./context/Miarmariocontext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Miarmario_Provider>
				<App />
			</Miarmario_Provider>
		</BrowserRouter>
	</React.StrictMode>
);