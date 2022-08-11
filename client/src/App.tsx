import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/navBar/navBar";

import "./App.scss";

export default function App() {
	return (
		<div id="wrapper">
			<NavBar />
			<Outlet />
		</div>
	);
}
