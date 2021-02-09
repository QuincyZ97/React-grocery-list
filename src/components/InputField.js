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
        <form className="input"
            onSubmit={(e) => {
            e.preventDefault();
            this.props.AddToList(this.state.groceryInput);
            this.resetInput(e)
        }}> 
            <input
                className="input__field"
                type="text"
                placeholder="Enter your grocery here..."
                onChange={this.getInputValue}
            />            
            <input
                className="input__btn"
                type="submit"
                value="Add"
            />
    
    </form>
        )
    }
}

export default InputField

