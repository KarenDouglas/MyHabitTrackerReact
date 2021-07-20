import React, {useState} from "react";
import Todo from "./Todo"



const  TodoBody= ({todos, setTodos, points, setPoints, completed}) => {
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
                        points={points}
                        setPoints={setPoints}
                        completed={completed}
                    />
                )) }
            </ul>        
        </div>   
    );
}
 
export default TodoBody;

