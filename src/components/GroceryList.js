import React from "react";
import List from "./List"
import InputField from "./InputField"

function GroceryList(props) {
  return (
    <div>
      <InputField
        AddToList={props.AddToList}
      />
      <List
        data={props.data}
        handleClickGrocery={props.handleClickGrocery}
      />
    </div>
    );
  }

export default GroceryList;