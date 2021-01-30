import React from "react";

function ListItem(props) {
    return (
        <div onClick={() => props.handleChange(props.title, props.id)}>
            <li>{props.title}</li>
            <hr/>
        </div>
    );
  }
  
  export default ListItem;