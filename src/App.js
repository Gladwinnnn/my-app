import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

// function App() {
//     const todoComponent = todosData.map(list => 
//         <TodoItem 
//             key={list.id}
//             todoItem={list}
//         />
//     );

//     return (
//         <div className="todo-list">
//             {todoComponent}
//         </div>
//     )
// }

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

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//         this.resetClick = this.resetClick.bind(this)
//     }

//     handleClick(){
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         });
//     }

//     resetClick(){
//         this.setState({ count: 0});
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//                 <button onClick={this.resetClick}>Reset</button>
//             </div>
//         )
//     }
// }

export default App