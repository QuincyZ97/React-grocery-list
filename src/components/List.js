import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const ListItems = props.data.map(item =>
        <div>
            <ListItem
                title={item.title}
                key={item.id}
                id={item.id}
                amount={item.amount}
                handleClickGrocery={props.handleClickGrocery}
                readonly={props.readonly}
            />
        </div>
    )
        return (
            <div>
                <ul>
                    {ListItems}
                </ul>
            </div>
        );
    }

export default List;