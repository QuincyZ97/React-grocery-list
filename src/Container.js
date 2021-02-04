import React from "react";
import GroceryList from './components/GroceryList';
import ShoppingCart from './components/ShoppingCart';

class Container extends React.Component {

    constructor() {
        super()
        this.state = {
            groceryItems: [{
                    id: 1,
                    title: "Butter",
                    amount: 1
                },
                {
                    id: 2,
                    title: "Cheese",
                    amount: 1
                },
                {
                    id: 3,
                    title: "Eggs",
                    amount: 12
                },
            ],

            shoppingListItems: [{
                id: 2,
                title: "Cheese",
                amount: 1
            }]
        }
        this.groceryItemToCart = this.groceryItemToCart.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.addToGroceryList = this.addToGroceryList.bind(this)
        this.updateAmount = this.updateAmount.bind(this)
    }

    //##########################################################################
    updateAmount(id) {
        console.log("Duplicate item found", id);
        // Get object from given id
        // copy prev state
        // amount++ & return new state
    }
    //========================================================================
    groceryItemToCart(name, value, quantity) {
        const newShoppingItem = {
            id: value,
            title: name,
            amount: quantity
        };

        if (this.state.shoppingListItems.some(obj => obj.id === newShoppingItem.id)) {
            this.updateAmount(value)
        } else {
            this.setState({
                shoppingListItems: [...this.state.shoppingListItems].concat(newShoppingItem)
            })
        };
    }
    //========================================================================
    emptyCart() {
        this.setState({
            ...this.state, //copy?
            shoppingListItems: [] // does not require copy?
        })
    };
    //========================================================================
    addToGroceryList(inputGrocery) {
        const uniqueKey = this.state.groceryItems.length + 1;
        const newGroceryItem = {
            id: uniqueKey,
            title: inputGrocery,
            amount: 1
        };
        console.log("A new items has been added")
        this.setState({
            groceryItems: [...this.state.groceryItems].concat(newGroceryItem)
        })
    }

    //##########################################################################
    render() {
        return (
            <div>
            <GroceryList
            data={this.state.groceryItems}
            handleClickGrocery = {this.groceryItemToCart}
            AddToList={this.addToGroceryList}
            />
            <ShoppingCart
            data={this.state.shoppingListItems}
            handleClickEmptyCart = {this.emptyCart}
            />
            </div>
        );
    }
}

export default Container;