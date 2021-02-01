import React from "react";
import List from "./List"

function ShoppingCart(props) {

  return (
    <div>
    <List data={props.data} />
      <button onClick={() => props.handleChange()}>Empty Cart</button>
    </div>
  );
}

export default ShoppingCart;