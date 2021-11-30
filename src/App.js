import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Order from "./Order";
import Pizza from "./Pizza";
import Confirm from "./Confirm";

function App() {
	const [activePage, setActivePage] = useState("Home");
	const [orderSelection, setOrderSelection] = useState();

	function changeActivePage(newValue) {
		setActivePage(newValue);
	}

	function updateSelection(myPizza, myToppings) {
		setOrderSelection({ myPizza, myToppings });
		console.log(orderSelection);
	}

	return (
		<Router>
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<div className="container">
						<Link to="/" className="navbar-brand">
							Faber Pizza
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarText"
							aria-controls="navbarText"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarText">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link to="/" className={activePage === "Home" ? "nav-link active" : "nav-link"}>
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/order" className={activePage === "Order" ? "nav-link active" : "nav-link"}>
										Menu/Online Order
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

			<Routes>
				<Route
					path="/order/"
					element={
						<div className="container">
							<Order activePage={activePage} changeActivePage={changeActivePage} />
						</div>
					}
				/>
				<Route
					path="/order/:pizza/:id"
					element={
						<div className="container">
							<Pizza updateSelection={updateSelection} />
						</div>
					}
				/>
				<Route
					path="order/confirm"
					element={
						<div className="container">
							<Confirm selection={orderSelection} />
						</div>
					}
				/>
				<Route
					path="/"
					element={
						<div className="container">
							<Home activePage={activePage} changeActivePage={changeActivePage} />
						</div>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
