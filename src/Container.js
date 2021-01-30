import React from "react";
import GroceryList from './components/GroceryList';
import ShoppingCart from './components/ShoppingCart';

class Container extends React.Component {

    constructor() {
        super()
        this.state = {
            groceryItems: [
            { id: 1, title: "Cheese" },
            { id: 2, title: "ham" },
            { id: 3, title: "Eggs" },
            { id: 4, title: "Bread" },
            { id: 5, title: "Milk" },
            
            { id: 6, title: "chocolate" },
            { id: 7, title: "gummies" },
            { id: 8, title: "cookies" },
            { id: 9, title: "cake" },
            { id: 10, title: "muffins" },
            ],

            shoppingListItems: []
        }
    }

 handleClickGroceryItem(title, id) {
     console.log(title, id)
     
}

    render() {
        return (
            <div>
                <GroceryList data={this.state.groceryItems} handleChange={this.handleClickGroceryItem} />
                <ShoppingCart data={this.state.shoppingListItems} />
            </div>
        );
    }
}
  
export default Container;