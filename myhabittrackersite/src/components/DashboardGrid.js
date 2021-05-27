import React, {useState} from 'react';
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import HabitHeader from "./HabitHeader";
import HabitBody from "./HabitBody";
import Stats from "./stats";
import DateTime from "./DateTime";
import { postTodo, fetchTodos } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        todo: state.todo
    };
  };

const mapDispatchToProps = {
    postTodo: (todoId, text, completed) => (postTodo(todoId, text, completed)),
    fetchTodos: () => (fetchTodos())
    
};

const DashboardGrid = () => {

  
  
    const [todoInputText, setTodoInputText] = useState("");
    const [todos, setTodos]= useState([]);
    const [habitInputText, setHabitInputText] = useState("");
    const [habits, setHabits]= useState([]);
    return (
        <React.Fragment>
            <DateTime/>
        <div className="dbGrid">
            <div className="todos-container">
                <div className='grid-title'> <h3>Todos</h3></div>
                <TodoHeader 
                    todos={todos} 
                    setTodos= {setTodos} 
                    todoInputText={todoInputText} 
                    setTodoInputText={setTodoInputText}
                    postTodo={postTodo}
                    todoId={todos.id}
                    
                   
                />
                <TodoBody 
                    todos={todos}
                    setTodos={setTodos}

                />
            </div>
           
            <div className="habits-container">
                <div className='grid-title'><h3>Habits</h3></div>
                <HabitHeader
                 habits={habits} 
                 setHabits= {setHabits} 
                 habitInputText={habitInputText} 
                 setHabitInputText={setHabitInputText}
                />
                <HabitBody
                habits={habits}
                setHabits={setHabits}
                />
            </div>
            <div className="stats">
                <div className='grid-title'><h3>stats</h3></div>
                <Stats/>
            </div>
        </div>
        </React.Fragment>
    );
}
 
export default  connect(mapStateToProps, mapDispatchToProps )(DashboardGrid);