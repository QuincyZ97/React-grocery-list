import React from "react"

function ListItem(props) {
    return (
        <div>
            <li>{props.title}</li>
            <hr/>
        </div>
    );
  }
  
  export default ListItem;