import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" 
                onChange={() => props.handleChange(props.todoItem.id)} 
                checked={props.todoItem.completed}>
            </input>
            <p>{props.todoItem.text}</p>
        </div>
    )
}

export default TodoItem;