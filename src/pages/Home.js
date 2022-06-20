import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
	return (
		<div className="container px-3 ">
			<div className="container ">
				<Logo />
				<Navigation />
				<h1 className="row">Accueil</h1>
				<br />

				<div className="row d-flex">
					<div className="col">
						<div className="container">
							<h1>Hello React</h1>
							<h2>Debut du cours</h2>
						</div>
					</div>
					<div className="col">
						<p className="col">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab molestiae nisi
							officia aliquid fuga dicta laboriosam voluptatem eos aliquam commodi facere autem veritatis,
							perspiciatis voluptates. Sint commodi adipisci eos exercitationem voluptatibus placeat
							repellat deleniti, hic cum odio dolor sit vel natus dolorum doloribus reprehenderit aliquam
							unde illum et incidunt?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
