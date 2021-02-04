import React from "react";
import List from "./List"

function ShoppingCart(props) {
  return (
    <div>
      <List data={props.data} readonly />
      <button onClick={() => props.handleClickEmptyCart()}>Empty Cart</button>
    </div>
  );
}

export default ShoppingCart;