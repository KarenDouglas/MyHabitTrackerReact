import React, {useState, useEffect} from "react";
import {  useSelector,useDispatch } from "react-redux";
import { addStreak, addHabits, fetchHabits,deleteStreak, deleteHabit, deleteDailyStreak } from "../actions/habits";
import moment from 'moment';



const Habit = ({habitText, habits, setHabits, habit, points, setPoints}) => {

    const dispatch = useDispatch();

    
    const deleteHandler = ()=> {
        setHabits(habits.filter((el) => el.id !== habit.id));
       dispatch(deleteHabit(habit.id));

       setTimeout( ()=> {
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
    })
        
        .then(response => 
            response.json()
        )
        .then(habits => {
            setHabits(habits);
        })
        .then(habits => { 
            dispatch(addHabits(habits));
        })
        .catch(error => {
            console.log('post habit', error.message);
        });
    }, 3000)


    }
    

    const addStreakHandler = e => {
        setPoints(points + 10)
        setHabits(habits.map(item =>{
            if (item.id === habit.id ){
                return{
                    ...item, streak: item.streak+= 1, dailyStreak: item.dailyStreak+=1
                }
            }
            return item;
        }));


        dispatch(addStreak(habit.id, habit.streak, habit.dailyStreak))
        
    }
        
    
    const resetStreakHandler = e => {
        setPoints(points - 5)
        setHabits(habits.map(item =>{
            if (item.id === habit.id ){
                return{
                    ...item, streak: item.streak= 0, dailyStreak: item.dailyStreak = 0
                }
            }
            return item;
        }));
       
        dispatch(deleteStreak(habit.id,habit.streak, habit.dailyStreak));



    }

    const resetDailyStreakHandler = e => {
        setHabits(habits.map(item =>{
            if (item.id === habit.id ){
                return{
                    ...item, dailyStreak: item.dailyStreak = 0
                }
            }
            return item;
        }));
       
        dispatch(deleteDailyStreak(habit.id, habit.dailyStreak));



    }
       
    const startHour= moment().startOf('hour');
    const endHour= moment().endOf('hour');
    const endHourMinus= moment().endOf("").subtract(1000)
    if (startHour.isBefore(moment()) && moment().isBefore( startHour.add(1000))){
        console.log("start of hour")
        console.log("start of hour")
        console.log("start of hour")
    
        resetDailyStreakHandler();
        
       }
       if (moment().isAfter(endHour.subtract(1000)) && moment().isBefore( endHour)){
        console.log("END of hour")
        console.log("END of hour")
        console.log("END of hour")
        console.log("END of hour")
      
        if(habit.dailyStreak == 0){
            resetStreakHandler();
        }
       }

    return (
        <div className="habit">
            <button className="delete-habit"
             onClick={deleteHandler}
            > 
            <i className="fa fa-times-circle"/>
            </button>
            <button 
                className = "delete-btn"
                onClick={ resetStreakHandler}
            >
                <i className="fa fa-minus-circle fa-lg"/>
            </button>
            
            <li key= {habit.id} className={`habit-item ${habit.dailyStreak > 0 ? "green": ""}`} >{`${habitText}     ` }<i className="fa fa-angle-right"/> {`${habit.dailyStreak}`}</li>
            <button 
                className = "complete-btn"
                onClick={addStreakHandler}
          
            >
                <i className="fa fa-plus-circle fa-lg"/>
            </button>
            <button className="streak-counter"> <i className="fa fa-angle-double-right"/>{`${habit.streak}`}</button>

           
            
        </div>
    );
}
 
export default Habit;