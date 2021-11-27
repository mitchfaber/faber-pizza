import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import veg from "./featured/vegeterian.jpg";
import meat from "./featured/meat.jpg";
import classic from "./featured/classic.jpg";

export default function Home({ activePage, changeActivePage }) {
	useEffect(() => {
		changeActivePage("Home");
	});
	return (
		<>
			<h2 className="title">Home</h2>
			<div className="row">
				<div className="col">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Cursus risus
					at ultrices mi. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Natoque penatibus et
					magnis dis parturient montes. Justo donec enim diam vulputate. Aliquet lectus proin nibh nisl condimentum id.
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col">
					<div class="card">
						<img src={meat} class="card-img-top img-thumbnail" alt="meat Pizza" />
						<div class="card-body">
							<h5 class="card-title">The Carnivore</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
							<Link to="order/meat" class="btn btn-primary">
								Go somewhere
							</Link>
						</div>
					</div>
				</div>
				<div className="col">
					<div class="card">
						<img src={classic} class="card-img-top img-thumbnail" alt="classic pizza" />
						<div class="card-body">
							<h5 class="card-title">The Classic</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
							<Link to="order/classic" class="btn btn-primary">
								Go somewhere
							</Link>
						</div>
					</div>
				</div>
				<div className="col">
					<div class="card">
						<img src={veg} class="card-img-top img-thumbnail" alt="Veggie" />
						<div class="card-body">
							<h5 class="card-title">The Vegetarian</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
							<Link to="order/veg" class="btn btn-primary">
								Go somewhere
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
