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
}
    
    render() { 
    return (
        <form onSubmit={(e) => {e.preventDefault(); this.props.AddToList(this.state.groceryInput)}} >  
            <input
                type="text"
                placeholder="Apples"
                onChange={this.getInputValue}
            />            
            <input type="submit" value="Add to list" />
    
    </form>
        )
    }
}

export default InputField

