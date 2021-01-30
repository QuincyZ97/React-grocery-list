import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const ListItems = props.data.map(item =>
        <ListItem
            title={item.title}
            key={item.id}
            id={item.id}
            handleChange={props.handleChange}
        />
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