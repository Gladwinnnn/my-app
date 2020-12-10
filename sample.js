// To-do List
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:todosData
        }  
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
            return {
                todos: updatedTodos
            }
        });
    }

    render() {
        const todoComponent = this.state.todos.map(list => 
            <TodoItem 
                key={list.id}
                todoItem={list}
                handleChange={this.handleChange}
            />
        );
    
        return (
            <div className="todo-list">
                {todoComponent}
            </div>
        )
    }
}

// simple change in state
class App extends React.Component {
    constructor (){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let buttonDisplay = this.state.isLoggedIn ? "login": "logout";
        let textDisplay = this.state.isLoggedIn ? "you are logged out": "you are logged in";
        return (
            <div>
                <button onClick={this.handleClick}>{buttonDisplay}</button>
                <h1>{textDisplay}</h1>
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.resetClick = this.resetClick.bind(this)
    }

    handleClick(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    resetClick(){
        this.setState({ count: 0});
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.resetClick}>Reset</button>
            </div>
        )
    }
}

// Fetching API
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            character: {}
        }  
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.character.name}
            </div>
        )
    }
}

// forms part 1
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "black"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        event.target.type === "checkbox" ? this.setState({[event.target.name]: event.target.checked}) : this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value = {this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                    <br/>

                    <input type="text" value = {this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                    <br />

                    <textarea 
                        value={"default"}
                        onChange={this.handleChange}
                    />
                    <br/>

                    <label>
                        <input 
                            type="checkbox" 
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        /> Is Friendly?
                    </label>
                    <br/>

                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>

                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br/>

                    <label>Favorite Color: </label>
                    <select 
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                    >
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <br/>

                    <button>Submit</button>
                </form>

                {console.log("firstname: " + this.state.firstName)}
                {console.log("lastname: " + this.state.lastName)}
                {console.log("isFriendly: " + this.state.isFriendly)}
                {console.log("gender: " + this.state.gender)}
                {console.log("favColor: " + this.state.favColor)}
            </div>
        )
    }
}

// forms part 2
class App extends React.Component{
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
            <main>
                <form>
                    <input value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/><br/>
                    <input value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/><br/>
                    <input value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange}/><br/>

                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    
                    
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}
                        /> Female
                    </label><br/>

                    <label>Where are you from: </label>
                    <select 
                        value={this.state.location}
                        onChange={this.handleChange}
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
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                        /> Vegan
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isHalal"
                            checked={this.state.isHalal}
                            onChange={this.handleChange}
                        /> Halal
                    </label>
                    <br/>

                    <button>Submit</button>
                    <hr/>
                    <h1>Entered information:</h1><br/>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>You are from: {this.state.location}</p>
                    <p>Your dietary restriction: </p>
                    <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                    <p>Halal: {this.state.isHalal ? "Yes" : "No"}</p>
                </form>
            </main>
        )
    }
}