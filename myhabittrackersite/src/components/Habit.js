import React, {useState} from "react";


const Habit = ({habitText, habits, setHabits, habit,habitId,}) => {
    const [habitCounter, sethabitCounter]= useState(0)
    //Events
    const deleteHandler = ()=> {
        setHabits(habits.filter((el) => el.id !== habit.id));
        console.log(habit)
    }
    

    const addStreakHandler = e => {
    
        sethabitCounter(habitCounter+1);
        
      }
      const deleteStreakHandler = e => {
    
        sethabitCounter(habitCounter- 1);
        
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
                onClick={ deleteStreakHandler}
            >
                <i className="fa fa-minus-circle fa-lg"/>
            </button>
            
            <li className={`habit-item ${habit.completed ? "completed": ""}`} >{`${habitText} ` }</li>
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