import React from "react";

function ListItem(props) {
    return (
            <li onClick={() => props.handleChange(props.title, props.id)}>{props.title}</li>
    );
  }
  
  export default ListItem;