import React, {useState, useEffect} from 'react';
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import HabitHeader from "./HabitHeader";
import HabitBody from "./HabitBody";
import Stats from "./stats";
import DateTime from "./DateTime";






const DashboardGrid = () => {
      
    const [habitCounter, sethabitCounter]= useState(0)
    const [hCompleted, setHCompleted]= useState(null)
    const [todoInputText, setTodoInputText] = useState("");
    const [todos, setTodos]= useState(null);
    const [habitInputText, setHabitInputText] = useState("");
    const [habits, setHabits]= useState([]);
    const [completed, setCompleted]= useState(null)
    const [isLoading, setIsLoading]= useState(true);
    const [error, setError]= useState(null);
    const[dailyStreak, setDailyStreak]= useState(0)


      
    useEffect(() => {
        setTimeout (()=> {
            fetch("http://localhost:8001/todos")
                .then(res=> {
                    if(!res.ok){
                        throw Error("oops ... something went wrong :(");
                    }
                return res.json();
                })
                .then(data =>{
                    console.log(data);
                    setTodos(data);
                    setIsLoading(false);
                    setError(false);
                })
                .catch(err => {
                    setError(err.message);
                    setIsLoading(false);
                
                })
        }, 1000);
    },[]);

    useEffect(() => {
        setTimeout (()=> {
            fetch("http://localhost:8001/habits")
                .then(res=> {
                    if(!res.ok){
                        throw Error("oops ... something went wrong :(");
                    }
                return res.json();
                })
                .then(data =>{
                    console.log(data);
                    setHabits(data);
                    setIsLoading(false);
                    setError(false);
                })
                .catch(err => {
                    setError(err.message);
                    setIsLoading(false);
                
                })
        }, 1000);
    },[]);



    
    
   

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
                        completed={completed}
                        setCompleted={setCompleted}
                    
                    />
                    {error && <div>{error}</div> }
                    {isLoading && <div> Loading...</div>}
                    {todos && <TodoBody 
                         todos={todos}
                         setTodos={setTodos}
                         completed={completed}
                         setCompleted={setCompleted}
                        
                    />}
                </div>
            
                <div className="habits-container">
                    <div className='grid-title'><h3>Habits</h3></div>
                    <HabitHeader
                    habits={habits} 
                    setHabits= {setHabits} 
                    habitInputText={habitInputText} 
                    setHabitInputText={setHabitInputText}
                    hCompleted={hCompleted}
                    setHCompleted={setHCompleted}
                    habitCounter={habitCounter}
                    sethabitCounter={sethabitCounter}
                    dailyStreak={dailyStreak}
                    setDailyStreak={setDailyStreak}
                    />
                    <HabitBody
                    habits={habits}
                    setHabits={setHabits}
                    habitCounter={habitCounter}
                    sethabitCounter={sethabitCounter}
                    dailyStreak={dailyStreak}
                    setDailyStreak={setDailyStreak}
                    habitInputText={habitInputText}
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

 
export default  (DashboardGrid);