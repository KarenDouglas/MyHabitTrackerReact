import React, { useContext} from "react";
import {  useDispatch } from "react-redux";
import {postTodo,  addTodos } from "../actions/actions"
import { post } from "jquery";
import { AuthContext } from "../shared/auth-context";
import { useHttpClient } from '../shared/http-hook';






const TodoHeader = ({setTodoInputText, todos, setTodos, todoInputText, completed, setCompleted}) => {
   const auth = useContext(AuthContext);
   const{ isLoading, error, sendRequest, clearError} = useHttpClient();
const todoInputTextHandler =(e) =>{
    console.log(e.target.value);
    setTodoInputText(e.target.value)
   
}

// const  submitTodoHandler= (e) => {
//     e.preventDefault()
//         setTodos([...todos, {text: todoInputText, completed: false }]);
//         const todo= { text: todoInputText, completed};
//         fetch("http://localhost:8001/todos",{
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(todo)
//         })
//         setTodoInputText("");
// };




const dispatch = useDispatch();

const  submitTodo= async (e) => {
    e.preventDefault();

    setTodos([...todos, {text: todoInputText, completed: false }]);
    const formData= {text: todoInputText, completed: false , user: auth.userId}
    try {
        await sendRequest('http://localhost:5000/todos', 
        'Post',
        JSON.stringify(formData),
        {
          'Content-Type': 'application/json'            
        },
    );
  
      } catch (err) {
        alert(err.message)
      }
      
   // const todo= todoInputText;
    //const text = todoInputText
    setTodoInputText("");
// dispatch(postTodo( text, completed));

// setTimeout (()=> {
//     fetch("http://localhost:5000/todos/:uid")
//     .then(response => {
//         if (response.ok) {
//             return response;
//         } else {
//             const error = new Error(`Error ${response.status}: ${response.statusText}`);
//             error.response = response;
//             throw error;
//         }
//     },
//     error => {
//         const errMess = new Error(error.message);
//         throw errMess;
//     }
// )
//         .then(response => response.json())
//         .then(todos => {
//             setTodos(todos);

//         }).then(todos =>{
//             dispatch(addTodos(todos));

//         })
//         .catch(error => {
//         console.log('post todo', error.message);
//     });
// }, 3000)
   
}
 
   


    return (  

      
        <React.Fragment>
        <form className="todo-form">
          <input placeholder= "Enter New Todo" value={todoInputText} onChange = {todoInputTextHandler} type="text" className="todo-input"/>
          <button onClick={submitTodo} className= "todo-button" type="submit"><i className="fa fa-plus-circle fa-lg"/></button>
        </form>
        </React.Fragment>
    );
}
 
export default TodoHeader;


