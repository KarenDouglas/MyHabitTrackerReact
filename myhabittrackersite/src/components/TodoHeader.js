import React, { useState, useEffect} from "react";
import { Control, LocalForm} from 'react-redux-form';
import {todos, SET_TODOS_INPUT_TEXT} from "../redux/todos";
import { AddTodoAction } from "../actions/TodoActions";


// function handleChange(e) {
//     console.log(e.target.value);
//   }
  

// const TodoHeader = ({dispatch, addTodo, completed, setCompleted, setTodos, todos}) => {
       
//     const [todosInputText, setTodosInputText] = useState("");
 
    
//     const todoInputTextHandler =(e) =>{
        
       

//     }

//     const  submitTodoHandler = (e) => {
//         e.preventDefault();
//         setTodos([...todos, {text: todosInputText, completed: false}]);
//     //    const todo = { todosInputText, completed, todos};
       
       
//     //    fetch("http://localhost:8001/todos", {
//     //        method: "POST",
//     //        headers: {"Content-Type": "application/json" },
//     //        body: JSON.stringify(todo)
    
//     //    }).then(() =>{
//     //        console.log("new todo added");
//     //        setTodosInputText("");
//     //    })
//        setTodosInputText("")
//     };
 
    

//     return (  

      
//         <React.Fragment>
//             <LocalForm
                 
//                 className="todo-form"
//             >
//                 <Control.text 
//                     model=".todo"
//                     className="form-control"

//                     value={todosInputText}  
//                     onChange = {(e)=> setTodosInputText(e.target.value)} 
//                     type="text" className="todo-input" 
//                     placeholder="Enter New Todo"
//                     required
//                 />
//                 <button 
//                    onClick={submitTodoHandler}
                       
                       
                    
//                     className= "todo-button" 
//                     type="submit"
//                 >
//                     <i className="fa fa-plus-square fa-lg"/>
//                 </button>
//             </LocalForm>
//         </React.Fragment>
//     );
// }
 
// export default TodoHeader;





const TodoHeader = ({setTodoInputText, todos, setTodos, todoInputText, completed, setCompleted}) => {
   

const todoInputTextHandler =(e) =>{
    console.log(e.target.value);
    setTodoInputText(e.target.value)

}

const  submitTodoHandler= (e) => {
        e.preventDefault();
        setTodos([...todos, {text: todoInputText, completed: false }]);
        const todo= { text: todoInputText, completed};
        fetch("http://localhost:8001/todos",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
        })

        console.log(todo)
        setTodoInputText("");
};
 


    return (  

      
        <React.Fragment>
        <form className="todo-form">
          <input placeholder= "Enter New Todo" value={todoInputText} onChange = {todoInputTextHandler} type="text" className="todo-input"/>
          <button onClick={submitTodoHandler} className= "todo-button" type="submit"><i className="fa fa-plus-circle fa-lg"/></button>
        </form>
        </React.Fragment>
    );
}
 
export default TodoHeader;