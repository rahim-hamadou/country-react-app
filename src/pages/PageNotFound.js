import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="container d-flex align-items-center flex-column justify-content-center">
			<div>
				<h1 className="py-4 d-flex align-items-center"> Perdu?</h1>
			</div>

			<div className="row">
				<p>Allez vers la page d'accueil avec ce bouton</p>
			</div>
			<div className=" mx-5 row d-flex">
				<button type="button" class="btn ">
					<Link to="/">Accueil</Link>
				</button>
			</div>
		</div>
	);
};

export default PageNotFound;
