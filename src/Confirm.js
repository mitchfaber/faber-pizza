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
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="nameInput">Name</label>
						<input id="nameInput" type="text" placeholder="Name" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="nameInput">Name</label>
						<input id="nameInput" type="text" placeholder="Name" className="form-control" />
					</div>
				</div>
			</form>
		</div>
	);
}
