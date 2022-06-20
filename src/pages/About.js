import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
const About = () => {
	return (
		<div className="container px-3 ">
			<Logo></Logo>
			<Navigation />
			<h1 className="row">A propos</h1>
			<br />

			<div className="row d-flex">
				<p className="col">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab molestiae nisi officia
					aliquid fuga dicta laboriosam voluptatem eos aliquam commodi facere autem veritatis, perspiciatis
					voluptates. Sint commodi adipisci eos exercitationem voluptatibus placeat repellat deleniti, hic cum
					odio dolor sit vel natus dolorum doloribus reprehenderit aliquam unde illum et incidunt?
				</p>

				<p className="col">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum error rem veniam totam
					accusamus iure corporis consectetur a numquam rerum perferendis quasi optio? Illo doloribus non
					dicta, perferendis dolore, rem iste ad accusantium fugiat odit magni natus nisi veniam soluta id
					consectetur totam est, unde minus aliquid tempora animi nam placeat beatae! Repellendus at
					consectetur distinctio quidem! Vitae, fugit fugiat recusandae nesciunt nulla rem in nisi quam minus
					ullam voluptatem aperiam debitis non laudantium.
				</p>
			</div>
		</div>
	);
};

export default About;
