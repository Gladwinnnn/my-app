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

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             status: "Completed"
//         };
//     }

//     render() {
//         const todoComponent = todosData.map(list => 
//             <TodoItem 
//                 key={list.id}
//                 todoItem={list}
//             />
//         );
    
//         return (
//             <div className="todo-list">
//                 {todoComponent}
//             </div>
//         )
//     }
// }

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let display;
        if (this.state.isLoggedIn == true){
            display = "in";
        } else{
            display = "out";
        }
        return (
            <div>
                <h1>You are currently logged {display}</h1>
            </div>
        )
    }
}

export default App