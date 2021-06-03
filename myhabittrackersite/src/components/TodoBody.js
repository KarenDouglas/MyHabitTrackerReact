import React, {useState} from "react";
import Todo from "./Todo"



const  TodoBody= ({todos, setTodos,setTodosInputText, todosInputText }) => {
    return (
        <div className="todo-container">
            <ul className ="todo-list">
                {todos.map(todo => (
                    <Todo 
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        todoText={todo.text}
                    />
                )) }
            </ul>        
        </div>   
    );
}
 
export default TodoBody;

