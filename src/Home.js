import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import veg from "./featured/vegeterian.jpg";
import meat from "./featured/meat.jpg";
import classic from "./featured/classic.jpg";

export default function Home({ changeActivePage }) {
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
					<div className="card">
						<img src={meat} className="card-img-top img-thumbnail" alt="meat Pizza" />
						<div className="card-body">
							<h5 className="card-title">The Carnivore</h5>
							<p className="card-text">
								The best. Bacon, Sausage, Salami, and of course pepperoni. One of the best options on here. You're
								feeling hungry, but not for any kind of plant. You just want to devour delicious meat. This is the
								pizza for you!
							</p>
							<Link to="order/The Carnivore/2" className="btn btn-primary">
								Order Now
							</Link>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img src={classic} className="card-img-top img-thumbnail" alt="classic pizza" />
						<div className="card-body">
							<h5 className="card-title">The Classic</h5>
							<p className="card-text">
								Not much to say about this. You can never go wrong with a classic pepperoni pizza.
							</p>
							<Link to="order/The Classic/1" className="btn btn-primary">
								Order Now
							</Link>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img src={veg} className="card-img-top img-thumbnail" alt="Veggie" />
						<div className="card-body">
							<h5 className="card-title">The Vegetarian</h5>
							<p className="card-text">
								In case you don't want meat. Yes, pineapple, but please ask for it without.
							</p>
							<Link to="order/The Vegetarian/4" className="btn btn-primary">
								Order Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
