import React, { useEffect } from "react";

export default function Order({ activePage, changeActivePage }) {
    useEffect(() => {
        changeActivePage("Order");
    });
    return <div className="container">Order</div>;
}
