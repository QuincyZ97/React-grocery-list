import React from "react";
import List from "./List"

function ShoppingCart(props) {
  //console.log(props.data)
  return (
      <List data={props.data}/>
  );
}

export default ShoppingCart;