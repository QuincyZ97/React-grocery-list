import React from "react";
import List from "./List"

function GroceryList(props) {

    return (
        <List data={props.data} handleChange={props.handleChange}/>
    );
  }

export default GroceryList;