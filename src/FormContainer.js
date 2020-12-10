import React from "react";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            location: "",
            isVegan: false,
            isHalal: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        event.target.type === "checkbox" ? this.setState({[event.target.name]:event.target.checked}) : this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <FormComponent 
            handleChange={this.handleChange}
            data={this.state}
        />
        )
    }
}

export default FormContainer