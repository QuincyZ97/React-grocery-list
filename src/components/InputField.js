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
            groceryInput: event.target.value.toLowerCase()
        })
    }

    resetInput(e) { //reset state & input field
        e.target.reset()
        this.setState({
            groceryInput: ""
        })
    }
    
    render() { 
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            this.props.AddToList(this.state.groceryInput);
            this.resetInput(e)
        }}> 
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

