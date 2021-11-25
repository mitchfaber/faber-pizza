import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Order from "./Order";

function App() {
	const [activePage, setActivePage] = useState("Home");
	const [loading, setLoading] = useState(true);

	function changeActivePage(newValue) {
		setActivePage(newValue);
	}
	if (loading) {
		return (
			<div className="h-100 d-flex justify-content-center align-items-center">
				<div className="text-center my-auto">
					<div className="h-100 spinner-border text-primary my-auto" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			</div>
		);
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
				<Route path="/Order" element={<Order activePage={activePage} changeActivePage={changeActivePage} />} />
				<Route path="/" element={<Home activePage={activePage} changeActivePage={changeActivePage} />} />
			</Routes>
		</Router>
	);
}

export default App;
