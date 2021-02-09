import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const ListItems = props.data.map(item =>
            <ListItem
                key={item.id}
                title={item.title}
                id={item.id}
                amount={item.amount}
                handleClickGrocery={props.handleClickGrocery}
                readonly={props.readonly}
            />
    )
        return (
                <ul>
                    {ListItems}
                </ul>
        );
    }

export default List;