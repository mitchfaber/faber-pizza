import React from "react";

export default function Topping({ name, checked, toggleTopping }) {
	function check(e) {
		toggleTopping(e.target.id);
	}

	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{name}
			<input id={name} type="checkbox" checked={checked} onChange={check}></input>
		</li>
	);
}
