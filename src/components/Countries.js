import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
	const [data, setData] = useState([]);
	// le useEffect se joue lorsque le composant est monté
	// structure : useEffect(() => {}, []);

	// variable necessaire a l'affichage des pays
	const [rangeValue, setRangeValue] = useState(36);

	// tab neccesaire au tri par continents
	const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

	const [selectedRadio, setSelectedRadio] = useState("");

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((response) => {
			setData(response.data);
		});
		// .then((response) => {
		// 	console.log(response.data);
		// });
	}, []);

	return (
		<div className="countries">
			<h1>COUNTRIES</h1>
			<ul className="radio-container">
				{/* tri du nb d'els affichés */}
				<label> Nombre de pays : {rangeValue} </label>
				<input
					type="range"
					min="1"
					max="250"
					defaultValue={rangeValue}
					onChange={(e) => {
						setRangeValue(e.target.value);
					}}
					id="show-country"
				/>

				{/* creation des btn radio */}
				{radios.map((continent) => (
					<li>
						<input
							type="radio"
							name="continentradio"
							id={continent}
							checked={selectedRadio === continent}
							onChange={(e) => setSelectedRadio(e.target.id)}
						></input>
						<label htmlFor={continent}>{continent}</label>
					</li>
				))}
			</ul>
			{selectedRadio && (
				<button
					onClick={() => {
						setSelectedRadio("");
					}}
				>
					Annuler le filtre
				</button>
			)}
			<ul>
				{/* ici on filtre , on tri, on coupe puis on affiche */}
				{data
					.filter((country) => country.continents[0].includes(selectedRadio))
					.sort((a, b) => b.population - a.population)
					.slice(0, rangeValue)
					.map((country, index) => (
						<Card key={index} country={country}></Card>
					))}
			</ul>
		</div>
	);
};

export default Countries;
