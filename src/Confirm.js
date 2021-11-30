import React from "react";

export default function Confirm({ selection }) {
	console.log(selection.myPizza);
	return (
		<div>
			<h2>Confirm</h2>
			<p>
				{selection.myPizza} with{" "}
				{selection.myToppings.map((t) => {
					if (t.checked) {
						return t.name + " ";
					}
				})}
			</p>
			<form>
				<div className="row">
					<div className="col">
						<div className="form-group">
							<label htmlFor="nameInput">Name</label>
							<input id="nameInput" type="text" placeholder="Name" className="form-control" />
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label htmlFor="emailInput">email</label>
							<input id="emailInput" type="email" placeholder="Name" className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="form-group">
							<label htmlFor="addressInput">Address 1</label>
							<input id="addressInput" type="text" className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="form-group">
							<label htmlFor="addressInput">Address 2</label>
							<input id="address2Input" type="text" className="form-control" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="form-group">
							<label htmlFor="cityInput">City</label>
							<input id="cityInput" type="text" className="form-control" />
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label htmlFor="postalInput">Postal Code</label>
							<input id="postalInput" type="text" className="form-control" />
						</div>
					</div>
				</div>
			</form>
			<div className="row">
				<div className="form-group">
					<button className="btn btn-primary">Submit</button>
				</div>
				<div className="form-group">
					<button className="btn btn-secondary">Back</button>
				</div>
			</div>
		</div>
	);
}
