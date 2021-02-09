import React from "react";
import List from "./List"

function ShoppingCart(props) {
  return (
    <div className="list__cart">
      <h5>Shopping Cart</h5>
      <List data={props.data} readonly />
      <button className="removeBtn" onClick={() => props.handleClickEmptyCart()}>Empty Cart</button>
    </div>
  );
}

export default ShoppingCart;