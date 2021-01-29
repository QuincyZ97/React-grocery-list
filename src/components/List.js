import React from "react"
import ListItem from "./ListItem"
//import Container from "../Container"

function List() {
        const ListItems = this.state.groceryItems.map(item =>
            <ListItem
                title={item.title}
                key={item.id}
            />)
        
        
        return (
            <div>
                <ul>
                    {ListItems}
                </ul>
            </div>
        );
    }


export default List;