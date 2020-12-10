import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input value={props.data.firstName} name="firstName" placeholder="First Name" onChange={props.handleChange}/><br/>
                <input value={props.data.lastName} name="lastName" placeholder="Last Name" onChange={props.handleChange}/><br/>
                <input value={props.data.age} name="age" placeholder="Age" onChange={props.handleChange}/><br/>

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Male"
                        checked={props.data.gender === "Male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Female"
                        checked={props.data.gender === "Female"}
                        onChange={props.handleChange}
                    /> Female
                </label><br/>

                <label>Where are you from: </label>
                <select 
                    value={props.data.location}
                    onChange={props.handleChange}
                    name="location"
                >
                    <option value="Singapore">Singapore</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea</option>
                </select><br/>

                <label>
                    <input 
                        type="checkbox" 
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                    /> Vegan
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="isHalal"
                        checked={props.data.isHalal}
                        onChange={props.handleChange}
                    /> Halal
                </label>
                <br/>

                <button>Submit</button>
                <hr/>
                <h1>Entered information:</h1><br/>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>You are from: {props.data.location}</p>
                <p>Your dietary restriction: </p>
                <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                <p>Halal: {props.data.isHalal ? "Yes" : "No"}</p>
            </form>
        </main>
    )
}

export default FormComponent