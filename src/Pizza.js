import React from "react";

export default function Pizza({ name, id }) {
	return (
		<div className="row">
			<div className="col">{name}</div>
		</div>
	);
}
