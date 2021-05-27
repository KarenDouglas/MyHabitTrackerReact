import React from "react";
import { Control, LocalForm} from 'react-redux-form';
import { postTodo } from "../redux/ActionCreators";




const TodoHeader = ({setTodoInputText, todos, setTodos, todoInputText, todoId}) => {

    const todoInputTextHandler =(e) =>{
        console.log(e.target.value);
        setTodoInputText(e.target.value)

    }

    const  submitTodoHandler= (values) => {
             setTodos([...todos, {text: todoInputText, completed: false, id: Math.random()*1000 }]);
             postTodo(todoId, values.text); 
            setTodoInputText("");
             
           
    };
 


    return (  

      
        <React.Fragment>
            <LocalForm
                onSubmit={values => submitTodoHandler(values)} 
                className="todo-form"
            >
                <Control.text 
                    model=".todo"
                    className="form-control"
                    value={todoInputText}  
                    onChange = {todoInputTextHandler} 
                    type="text" className="todo-input" 
                    placeholder="Enter New Todo"
                />
                <button 
                   
                    className= "todo-button" 
                    type="submit"
                >
                    <i className="fa fa-plus-square fa-lg"/>
                </button>
            </LocalForm>
        </React.Fragment>
    );
}
 
export default TodoHeader;
