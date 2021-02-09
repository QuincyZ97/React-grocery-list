import React from "react";
import List from "./List"
import InputField from "./InputField"

function GroceryList(props) {
  return (
    <div className="list__grocery">
      <InputField
        className="input"
        AddToList={props.AddToList}
      />
      <h5>My Groceries</h5>
      <List
        data={props.data}
        handleClickGrocery={props.handleClickGrocery}
      />
    </div>
    );
  }

export default GroceryList;