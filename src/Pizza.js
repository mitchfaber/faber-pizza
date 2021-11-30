import React, { useState, useEffect } from "react";
import { useParams, Link, Route } from "react-router-dom";
import Prismic from "@prismicio/client";
import Topping from "./Topping";

export default function Pizza({ updateSelection }) {
	const apiEndpoint = "https://faber-pizza.prismic.io/api/v2";
	const accessToken = "MC5ZYUp2YXhNQUFCNEFyQkx6.HUZPJe-_vVRY77-977-9aS_vv70_77-977-9Xe-_ve-_vV0xfSF8Qu-_ve-_ve-_vU_vv70HJnY"; // This is where you would add your access token for a Private repository
	const Client = Prismic.client(apiEndpoint, { accessToken });
	const [toppings, setToppings] = useState([]);
	let { pizza, id } = useParams();
	useEffect(() => {
		const fetchPizzaData = async () => {
			const response = await Client.query([Prismic.Predicates.at("my.pizza.uid", id)]);
			if (response) {
				console.log(response.results[0].data.body[0].items);
				response.results[0].data.body[0].items.map((t) => {
					fetchToppingData(t.pizzatopping.uid);
				});
			}
		};
		fetchPizzaData();
	}, []);

	useEffect(() => {
		updateSelection(pizza, toppings);
	}, [toppings]);

	function toggleTopping(name) {
		const newToppings = [...toppings];
		const top = newToppings.find((top) => top.name === name);
		top.checked = !top.checked;
		setToppings(newToppings);
	}

	async function fetchToppingData(tid) {
		const response = await Client.query([Prismic.Predicates.at("my.topping.uid", tid)]);
		if (response.results) {
			console.log(response.results);
			setToppings((prevToppings) => {
				if (pizza === "Make your own") {
					return [...prevToppings, { name: response.results[0].data.toppingname[0].text, checked: false }];
				} else {
					return [...prevToppings, { name: response.results[0].data.toppingname[0].text, checked: true }];
				}
			});
		}
	}

	return (
		<div className="d-flex justify-content-center">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">{pizza}</h2>
					<div className="card-text">
						<ul className="list-group">
							{toppings.map((t) => {
								return <Topping name={t.name} checked={t.checked} toggleTopping={toggleTopping} />;
							})}
						</ul>
					</div>
					<Link to={"/order/confirm"} className="btn btn-primary">
						Next
					</Link>
				</div>
			</div>
		</div>
	);
}
