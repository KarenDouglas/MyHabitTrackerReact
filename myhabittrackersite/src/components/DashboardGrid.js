import React, {useState, useEffect, useContext} from 'react';
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import HabitHeader from "./HabitHeader";
import HabitBody from "./HabitBody";
import DateTime from "./DateTime";
import RewardHeader from './RewardHeader';
import {  useDispatch } from "react-redux";
import { addHabits } from '../actions/habits';
import {  addTodos} from "../actions/actions"
import {addRewards} from "../actions/rewards"
import RewardBody from './RewardBody';
import { AuthContext } from "../shared/auth-context";
import { useHttpClient } from '../shared/http-hook';
import { useParams } from 'react-router-dom';








const DashboardGrid = () => {
    const auth = useContext(AuthContext);
    const{ isLoading, error, sendRequest, clearError} = useHttpClient();
    const userId = useParams().userId;
    const [points, setPoints] = useState(0); 
    const [rewardText, setRewardText] = useState("");
    const [rewardInputText, setRewardInputText] = useState("");
    const [rewardCost, setRewardCost] = useState(10);
    const [rewardCostInput, setRewardCostInput] = useState(null);
    const [rewards, setRewards]= useState([]); 
    
    
    
    const [habitCounter, sethabitCounter]= useState(0)
    const [hCompleted, setHCompleted]= useState(null)
    const [todoInputText, setTodoInputText] = useState("");
    const [todos, setTodos]= useState([]);
    const [habitInputText, setHabitInputText] = useState("");
    const [habits, setHabits]= useState([]);
    const [completed, setCompleted]= useState(false)
    const[dailyStreak, setDailyStreak]= useState(0)
    const dispatch = useDispatch();
    
    
    
    
    useEffect(() => {
        
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
        // })
        // setTimeout (()=> {
        //     fetch("http://localhost:8001/todos")
        //         .then(res=> {
        //             if(!res.ok){
        //                 throw Error("oops ... something went wrong :(");
        //             }
        //         return res.json();
        //         })
        //         .then(data =>{
        //             console.log(data);
        //            setTodos(data);
        //            saveTodos(data);
        //             setIsLoading(false);
        //             setError(false);
        //         })
        //         .catch(err => {
        //             setError(err.message);
        //             setIsLoading(false);
                
        //         })
        // }, 10000);
    },[]);


        

    useEffect(() => {

        fetch('http://localhost:8001/habits/')
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
            .then(habits => {
             setHabits(habits);
         })
            .then(habits => { 
                dispatch(addHabits(habits));
             })
            
            
            .catch(error => {
                console.log('post habit', error.message);
            });
        // setTimeout (()=> {
        //     fetch("http://localhost:8001/habits")
        //         .then(res=> {
        //             if(!res.ok){
        //                 throw Error("oops ... something went wrong :(");
        //             }
        //         return res.json();
        //         })
        //         .then(data =>{
        //             console.log(data);
        //             setHabits(data);
        //             setIsLoading(false);
        //             setError(false);
        //         })
        //         .catch(err => {
        //             setError(err.message);
        //             setIsLoading(false);
                
        //         })
        // }, 1000);
    }, []);


    useEffect(() => {

        fetch('http://localhost:8001/rewards/')
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
            .then(rewards => {
             setRewards(rewards);
         })
            .then(rewards => { 
                dispatch(addRewards(rewards));
             })
            
            
            .catch(error => {
                console.log('post reward', error.message);
            });
    
        }, []);
   

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
                        {todos && <TodoBody 
                            todos={todos}
                            setTodos={setTodos}
                            completed={completed}
                            setCompleted={setCompleted}
                            points={points}
                            setPoints={setPoints}
                            
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
                        points={points}
                        setPoints={setPoints}
                        />
                    </div>
                    <div className="rewards-container">
                        <div className='grid-title'><h3>Rewards</h3></div>
                        <RewardHeader
                        
                        points= {points}
                        setPoints= {setPoints}
                        rewardCost={rewardCost}
                        setRewardCost= {setRewardCost}
                        rewardText ={rewardText}
                        setRewardText={setRewardText}

                        rewardInputText ={rewardInputText}
                        setRewardInputText={setRewardInputText}
                        rewardCostInput ={rewardCostInput}
                        setRewardCostInput ={setRewardCostInput}
                        rewards={rewards}
                        setRewards= {setRewards}
                        />
                        <RewardBody
                        rewards={rewards}
                        points= {points}
                        setPoints= {setPoints}
                        setRewards={setRewards}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
}

 
export default  (DashboardGrid);