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
        this.groceryItemToCart = this.groceryItemToCart.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.addToGroceryList = this.addToGroceryList.bind(this)
    }

    //##########################################################################
    groceryItemToCart(name, value) {
        const newShoppingItem = { id: value, title: name };
     
     this.setState(prevState => {
         const newShoppingState = [...prevState.shoppingListItems];
         newShoppingState.push(newShoppingItem);
         const newState = { ...prevState, shoppingListItems: newShoppingState }
         return newState;
     })
     
    }

    //========================================================================
    emptyCart() {
        this.setState(prevState => {
            const newState = { ...prevState, shoppingListItems: [] }
            return newState;
        })
    }

    //========================================================================
    addToGroceryList(inputGrocery) {
        const uniqueKey = this.state.groceryItems.length + 1;
        const newGroceryItem = { id: uniqueKey, title: inputGrocery };

        this.setState(prevState => {
            const newGroceryState = [...prevState.groceryItems];
            newGroceryState.push(newGroceryItem);
            const newState = { ...prevState, groceryItems: newGroceryState }
            return newState;
        })
        console.log("A new items has been added" + newGroceryItem)
        console.log(this.state.groceryItems)
    }

    //##########################################################################
    render() {
        return (
            <div>
                <GroceryList
                    data={this.state.groceryItems}
                    handleChange={this.groceryItemToCart}
                    AddToList={this.addToGroceryList}
                />
                <ShoppingCart
                    data={this.state.shoppingListItems}
                    handleChange={this.emptyCart}
                />
            </div>
        );
    }
}
  
export default Container;