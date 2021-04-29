import React, {useState} from "react";




const TodoHeader = ({setTodoInputText, todos, setTodos, todoInputText}) => {

const todoInputTextHandler =(e) =>{
    console.log(e.target.value);
    setTodoInputText(e.target.value)

}

const  submitTodoHandler= (e) => {
        e.preventDefault();
        setTodos([...todos, {text: todoInputText, completed: false, id: Math.random()*1000 }]);
        setTodoInputText("");
};
 


    return (  

      
        <React.Fragment>
        <form className="todo-form">
          <input value={todoInputText}  onChange = {todoInputTextHandler} type="text" className="todo-input" placeholder="Enter New Todo"/>
          <button onClick={submitTodoHandler} className= "todo-button" type="submit"><i className="fa fa-plus-square fa-lg"/></button>
        </form>
        </React.Fragment>
    );
}
 
export default TodoHeader;
