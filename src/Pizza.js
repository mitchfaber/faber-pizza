import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Prismic from "@prismicio/client";

export default function Pizza() {
	const apiEndpoint = "https://faber-pizza.prismic.io/api/v2";
	const accessToken = "MC5ZYUp2YXhNQUFCNEFyQkx6.HUZPJe-_vVRY77-977-9aS_vv70_77-977-9Xe-_ve-_vV0xfSF8Qu-_ve-_ve-_vU_vv70HJnY"; // This is where you would add your access token for a Private repository
	const Client = Prismic.client(apiEndpoint, { accessToken });
	const [toppings, setToppings] = useState([]);
	let { pizza, id } = useParams();
	useEffect(() => {
		const fetchPizzaData = async () => {
			const response = await Client.query([Prismic.Predicates.at("my.pizza.uid", id)]);
			if (response) {
				console.log(response.results);
				setToppings();
			}
		};
		fetchPizzaData();
	}, []);

	return <div className="card-title">yum {pizza}</div>;
}
