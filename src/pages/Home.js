import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
	return (
		<div className="container px-3 ">
			<div className="container ">
				<Logo />
				<Navigation />
				<Countries />
			</div>
		</div>
	);
};

export default Home;
