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
            ],

            shoppingListItems: [
                { id: 1, title: "Cheese" },
                { id: 2, title: "ham" },
                { id: 3, title: "Eggs" },
                { id: 4, title: "Bread" },
                { id: 5, title: "Milk" },
            ]
        }
    }


    render() {
        return (
            <div>
                <GroceryList groceryItems={this.state.groceryItems}/>
                <ShoppingCart shoppingListItems={this.state.shoppingListItems}/>
            </div>
        );
    }
}
  
export default Container;