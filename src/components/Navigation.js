import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<ul>
				{/* Ajout de la class nav active */}
				<NavLink to={"/"} className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>accueuil</li>
				</NavLink>
				<NavLink to={"/about"} className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>à propos</li>
				</NavLink>
				{/* <NavLink to={"/"}>
					<li>accueuil</li>
				</NavLink> */}
			</ul>
		</div>
	);
};

export default Navigation;
