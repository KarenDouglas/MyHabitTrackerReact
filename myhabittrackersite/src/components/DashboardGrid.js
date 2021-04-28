import React, {useState} from 'react';
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import HabitHeader from "./HabitHeader"
import HabitBody from "./HabitBody"


const DashboardGrid = () => {
    const [todoInputText, setTodoInputText] = useState("");
    const [todos, setTodos]= useState([]);
    const [habitInputText, setHabitInputText] = useState("");
    const [habits, setHabits]= useState([]);
    return (
        <div className="dbGrid">
            <div className="todos-container">
                <TodoHeader 
                    todos={todos} 
                    setTodos= {setTodos} 
                    todoInputText={todoInputText} 
                    setTodoInputText={setTodoInputText}
                />
                <TodoBody 
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            <div className="habits-container">
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
            <div className="stats"></div>
        </div>
    );
}
 
export default DashboardGrid;