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
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        
    }

 handleClickGroceryItem(name, value) {

     const newShoppingItem = { id: value, title: name };
     
     this.setState(prevState => {
         //copy old shoppinglist state array
         const newShoppingState = [...prevState.shoppingListItems];
         //push new object into array
         newShoppingState.push(newShoppingItem);
         // copy old state and add new shopping array
         const newState = { ...prevState, shoppingListItems: newShoppingState }
         return newState;
     })
     
    }
    
    emptyCart() {
        this.setState(prevState => {
            const newState = { ...prevState, shoppingListItems: [] }
            return newState;
        })
    }

    render() {
        return (
            <div>
                <GroceryList data={this.state.groceryItems} handleChange={this.handleClickGroceryItem} />
                <ShoppingCart data={this.state.shoppingListItems} handleChange={this.emptyCart} />
            </div>
        );
    }
}
  
export default Container;