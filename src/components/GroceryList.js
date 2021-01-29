import React from "react";
import List from "./List"
import Container from '../Container';

function GroceryList() {
    return (
      <List groceryItems={Container} />
    );
  }

export default GroceryList;