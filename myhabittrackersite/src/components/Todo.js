import { data } from "jquery";
import React from "react";

const Todo = ({todoText, todos, setTodos, todo,  todoId, todoInputText, completed, setCompleted}) => {

    
    //Events
    const deleteHandler = ()=> {
        setTodos(todos.filter((el) => el.id !== todo.id));
       fetch("http://localhost:8001/todos/"+ todo.id, {
        method: "DELETE"
       })
    }
    const completeHandler = () => {
        setTodos(todos.map(item =>{
            if (item.id === todo.id ){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
        const complete= { id: todo.id, completed: completed= true};
        const cb = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(complete)
        };
        fetch("http://localhost:8001/todos/" + todo.id , cb)
            
        

        
        
               
                

    }
    return (
        <div className="todo">
            <button 
                className = "delete-btn"
                onClick={deleteHandler}
            >
                <i className="fa fa-times-circle fa-lg"/>
            </button>
            <li key={todo.id}className={`todo-item ${todo.completed ? "completed": ""}`} >{todoText}</li>
            <button 
                
                className = "complete-btn"
                onClick={completeHandler}
            >
                <i className="fa fa-check-circle fa-lg"/>
            </button>
            
        </div>
    );
}
 
export default Todo;