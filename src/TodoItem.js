import React from "react";

function TodoItem(props) {
    const completedStyle = {
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" 
                onChange={() => props.handleChange(props.todoItem.id)} 
                checked={props.todoItem.completed}>
            </input>
            <p style={props.todoItem.completed? completedStyle: null}>{props.todoItem.text}</p>
        </div>
    )
}

export default TodoItem;