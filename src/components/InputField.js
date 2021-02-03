import React from "react";

class InputField extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryInput:""
        }
        this.getInputValue = this.getInputValue.bind(this)
}

    getInputValue(event) {
        this.setState({
            groceryInput: event.target.value
        })
        console.log(this.state.groceryInput)
}
    
    render() { 
    return (
    <form onSubmit={() => this.props.AddToList(this.state.groceryInput)} >  
            <input
                type="text"
                placeholder="Apples"
                onChange={this.getInputValue}
            />
            <h1>{this.state.groceryInput}</h1>
            
            <input type="submit" value="Add to list" />
    
    </form>
        )
    }
}

export default InputField

