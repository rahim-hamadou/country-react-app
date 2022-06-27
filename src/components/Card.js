import React from "react";

const Card = ({ country }) => {
	// rendu conditionnel
	const capital = country.capital;
	return (
		<li className="card">
			<img src={country.flags.svg} alt={"le drapeau " + country.translations.fra.common}></img>
			<div className="infos">
				<h2>{country.translations.fra.common}</h2>
				{/* operateur ternaire  pour completer selon la dispo des info de l'API*/}
				<h4>capital: {capital ? country.capital : "à voir"}</h4>
				<p>pop: {country.population.toLocaleString()}</p>
			</div>
		</li>
	);
};

export default Card;
