import React from "react";

const Logo = () => {
	return (
		<div className="logo">
			{/* Les images importées depuis la balise img sont accessibles depuis le dossier "public" */}
			<img src="./logo192.png" alt="logo react" />
			<h3>React World Country</h3>
		</div>
	);
};

export default Logo;
