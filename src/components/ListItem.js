import React from "react";

function ListItem(props) {
        return (
                <li
                key={props.id}
                onClick={props.handleClickGrocery ? () => props.handleClickGrocery(props.title, props.id, props.amount)
                                : undefined}>{props.title}
                {props.readonly ? <span> Amount: {props.amount}</span> : null}
                </li>
    );
  }
  
  export default ListItem;