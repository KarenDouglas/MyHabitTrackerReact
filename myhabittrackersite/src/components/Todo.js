import { data } from "jquery";
import React, {useState, useEffect, useContext} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, deleteTodo, addTodos } from "../actions/actions";
import { AuthContext } from "../shared/auth-context";
import { useHttpClient } from '../shared/http-hook';
import { useParams } from 'react-router-dom';



const Todo = ({todoText, todos,  setTodos, todo, completed, points, setPoints}) => {
    const auth = useContext(AuthContext);
    const{ isLoading, error, sendRequest, clearError} = useHttpClient();

    const userId = useParams().userId;

    // useEffect(() => {
    //     let isMounted = true
    //         if (isMounted) {
    //             const fetchTodos = async () => {
    //                 try {
    //                     const responseData = await sendRequest(`http://localhost:5000/todos/${userId}`);
    //                     setTodos(responseData.todos)
    //                 } catch (err) {
    //                     alert(err.message)
    //                 }
    //             };
                
    //             fetchTodos();
    //             console.log(`("attempted to fetch")${userId}`)
    //         }
        
    //     return () => { isMounted = false }
    // },[sendRequest, userId]);
    const dispatch = useDispatch();
    //Events
    const deleteHandler = ()=> {
        setTodos(todos.filter((el) => el.id !== todo.id));
        const id=todo.id
       dispatch(deleteTodo(id))
      
       setTimeout (()=> {
        fetch("http://localhost:8001/todos/")
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
            .then(response => response.json())
            .then(todos => {
                setTodos(todos);
    
            }).then(todos =>{
                dispatch(addTodos(todos));
    
            })
            .catch(error => {
            console.log('post todo', error.message);
        });
    }, 3000)
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
        
        const reduxComplete = () => {
           setPoints(points + 10)
            setTodos(todos.map(item =>{
                if (item.id === todo.id ){
                    return{
                        ...item, completed: !item.completed
                    }
                }
                return item;
            }));
            const id = todo.id

            dispatch(completeTodo(id, completed))
            
            

        }
       
                
    
    return (
        <div className="todo">
            <button 
                className = "delete-btn"
                onClick={deleteHandler}
            >
                <i className="fa fa-times-circle fa-lg"/>
            </button>
            <li  key={todo.id} className={`todo-item ${todo.completed ? "completed": ""}`} >{todoText}</li>
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