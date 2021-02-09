import React from "react";
import GroceryList from './components/GroceryList';
import ShoppingCart from './components/ShoppingCart';

class Container extends React.Component {

    constructor() {
        super()
        this.state = {
            groceryItems: [{
                    id: 1,
                    title: "Bread",
                    amount: 1
                },
            ],

            shoppingListItems: [{
                id: 1,
                title: "Bread",
                amount: 1
            }
            ]
        }
        this.groceryItemToCart = this.groceryItemToCart.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.addToGroceryList = this.addToGroceryList.bind(this)
        this.updateAmount = this.updateAmount.bind(this)
    }

//##############################    FUNCTIONS   #######################################
    updateAmount(id) {
        this.setState(prevState => {
            const updateAmount = prevState.shoppingListItems.map(obj => {
                if (obj.id === id) {
                    return {
                        ...obj,
                        amount: obj.amount + 1
                    }
                } return obj
            }) // end of map
            return {
                ...this.state,
                shoppingListItems: updateAmount
            }      
        })
    }

//========================================================================
    groceryItemToCart(name, value, quantity) {
        const newShoppingItem = {
            id: value,
            title: name,
            amount: quantity
        };

        if (this.state.shoppingListItems.find(obj => obj.id === value)) {
            this.updateAmount(value)
        } else {
            this.setState({
                ...this.state,
                shoppingListItems: [...this.state.shoppingListItems].concat(newShoppingItem)
            })
        };
    }

//========================================================================
    emptyCart() {
        this.setState({
            ...this.state,
            shoppingListItems: []
        })
    };

//========================================================================
    addToGroceryList(inputGrocery) {
        if (inputGrocery === ""){ // check for empty string
            alert("Please enter a valid grocery name")
            return
        } else{            
        const uniqueKey = this.state.groceryItems.length + 1;
        const newGroceryItem = {
            id: uniqueKey,
            title: inputGrocery,
            amount: 1
        };
        this.setState({
            ...this.state,
            groceryItems: [...this.state.groceryItems].concat(newGroceryItem)
        })
    }
    }

//#########################     RENDER    ############################################
    render() {
        return (
            <main>
                <h1 className="header">My grocery list</h1>
            <div className="list__display">
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
            </main>
        );
    }
}

export default Container;