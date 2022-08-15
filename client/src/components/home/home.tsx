import React from "react";
import "./home.scss";

import { Button } from "../button/button";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Button className="outlined">Click me</Button>
		</div>
	);
}
