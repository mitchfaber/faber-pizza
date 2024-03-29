import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Prismic from "@prismicio/client";

export default function Order({ activePage, changeActivePage }) {
	const [pizzas, setPizzas] = useState([]);

	const apiEndpoint = "https://faber-pizza.prismic.io/api/v2";
	const accessToken = "MC5ZYUp2YXhNQUFCNEFyQkx6.HUZPJe-_vVRY77-977-9aS_vv70_77-977-9Xe-_ve-_vV0xfSF8Qu-_ve-_ve-_vU_vv70HJnY"; // This is where you would add your access token for a Private repository

	const Client = Prismic.client(apiEndpoint, { accessToken });

	useEffect(() => {
		const fetchPizzaData = async () => {
			const response = await Client.query(Prismic.Predicates.at("document.type", "pizza"));
			if (response) {
				setPizzas(response.results);
			}
		};
		fetchPizzaData();
		changeActivePage("Order");
	}, []);

	return (
		<>
			<h2 className="title">Order</h2>
			<div className="row">
				<div className="col">
					Pizza for every occasion! Pick one, edit it (or don’t) and order! So easy! Neque laoreet suspendisse interdum
					consectetur libero id faucibus nisl tincidunt. Cursus risus at ultrices mi. Diam phasellus vestibulum lorem
					sed risus ultricies tristique nulla. Natoque penatibus et magnis dis parturient montes. Justo donec enim diam
					vulputate. Aliquet lectus proin nibh nisl condimentum id.
				</div>
			</div>
			<hr />
			<div className="container row">
				{pizzas.map((p) => {
					return (
						<div key={p.uid} className="col-xs-1 col-md-6">
							<div className="card">
								<div className="card-body">
									<div className="card-title">{p.data.pizzaname[0].text}</div>
									<p className="card-text">{p.data.description[0].text}</p>
									<Link to={"/order/" + p.data.pizzaname[0].text + "/" + p.uid} className="btn btn-primary">
										Order Now
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
