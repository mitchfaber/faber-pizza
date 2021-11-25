import React, { useEffect } from "react";

export default function Home({ activePage, changeActivePage }) {
	useEffect(() => {
		changeActivePage("Home");
	});
	return (
		<div className="container">
			<h2 className="title">Home</h2>
			<p></p>
		</div>
	);
}
