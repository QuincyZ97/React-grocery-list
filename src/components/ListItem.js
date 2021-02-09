import React from "react";

function ListItem(props) {
        return (
                <li
                className="list__item"
                onClick={props.handleClickGrocery ? () => props.handleClickGrocery(props.title, props.id, props.amount)
                                : undefined}>{props.title}
                {props.readonly ? <span> Amount: {props.amount}</span> : <span>+</span>}
                </li>
    );
  }
  
  export default ListItem;