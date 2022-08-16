import React from "react";
import "./navBar.scss";
import { Button } from "../button/button";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="navWrapper">
			<h1>Remember</h1>
			<div>
				<NavLink to="/auth" state={{ isSignup: false }}>
					<Button className="outlined" type="button">
						Sign In
					</Button>
				</NavLink>
				<NavLink to="/auth" state={{ isSignup: true }}>
					<Button className="filled" type="button">
						Sign Up
					</Button>
				</NavLink>
			</div>
		</div>
	);
}
