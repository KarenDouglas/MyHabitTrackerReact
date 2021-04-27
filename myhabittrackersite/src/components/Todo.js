import React from "react";

const Todo = ({todoText, todos, setTodos, todo}) => {
    //Events
    const deleteHandler = ()=> {
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo)
    }
    const completeHandler = () => {
        setTodos(todos.map(item =>{
            if (item.id === todo.id ){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <button 
                className = "delete-btn"
                onClick={deleteHandler}
            >
                <i className="fa fa-minus-circle fa-lg"/>
            </button>
            <li className={`todo-item ${todo.completed ? "completed": ""}`} >{todoText}</li>
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