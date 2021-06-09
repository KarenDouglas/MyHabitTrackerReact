import React, {useState, useEffect} from "react";
import DashboardGrid from "./DashboardGrid";


const Habit = ({habitText, habits, setHabits, habit,habitId, habitInputText}) => {
    //Events
    const [habitCounter, sethabitCounter]= useState(0)
    const[dailyStreak, setDailyStreak]= useState(0)
    

    
    const deleteHandler = ()=> {
        setHabits(habits.filter((el) => el.id !== habit.id));
        console.log(habit)
        fetch("http://localhost:8001/habits/"+ habit.id, {
            method: "DELETE"
           })


    }
    

    const addStreakHandler = e => {
        sethabitCounter(habitCounter+ 1);

        const streakplus= { id: habit.id, habitCounter: habitCounter+1, dailyStreak: dailyStreak+1};
        const cb = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(streakplus)
        };
        fetch("http://localhost:8001/habits/" + habit.id , cb)
        setDailyStreak(dailyStreak+1)
    }
        
    
      const deleteStreakHandler = e => {
    
        sethabitCounter(0);
        const streakminus= { id: habit.id, habitCounter: habitCounter-1};
        const cb = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(streakminus)
        };
        fetch("http://localhost:8001/habits/" + habit.id , cb)
        setDailyStreak(0)
      }



       function consistency(){
           return new Promise ((resolve, reject)=> {
            if (dailyStreak > 0){
                resolve("greater than 0")
            }
                if(dailyStreak< 1 &&habitCounter > 0){
                reject("less than 1")
                } 
            
        })
       }
     
       consistency().then((message)=>{
        console.log(message);
        setTimeout(()=>{
            setDailyStreak(0)
            console.log("daily streak reset")
        }, 30000)

        })
        .catch((error)=>{
            if(dailyStreak< 1 && habitCounter> 0){
                setTimeout(() => {
                    
                    sethabitCounter(0)
                   
                    console.log("all time streak reset")
                    
                }, 45000)  
                  
            }
            console.log(error)
        })

        
       
         useEffect(() => {
            const abortCont= new AbortController();
            setInterval (()=> {
                
            }, 10000);
            return () => abortCont.abort();
        });
    
    



    return (
        <div className="habit">
            <button className="delete-habit"
             onClick={deleteHandler}
            > 
            <i className="fa fa-times-circle"/>
            </button>
            <button 
                className = "delete-btn"
                onClick={ deleteStreakHandler}
            >
                <i className="fa fa-minus-circle fa-lg"/>
            </button>
            
            <li  className={`habit-item ${dailyStreak > 0 ? "green": ""}`} >{`${habitText}     ` }<i className="fa fa-angle-right"/> {`${dailyStreak}`}</li>
            <button 
                className = "complete-btn"
                onClick={addStreakHandler}
          
            >
                <i className="fa fa-plus-circle fa-lg"/>
            </button>
            <button className="streak-counter"> <i className="fa fa-angle-double-right"/>{`${habitCounter}`}</button>

           
            
        </div>
    );
}
 
export default Habit;