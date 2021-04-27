import React from "react";

const Habit = ({habitText, habits, setHabits, habit}) => {
    //Events
    const deleteHandler = ()=> {
        setHabits(habits.filter((el) => el.id !== habit.id));
        console.log(habit)
    }
    const completeHandler = () => {
        setHabits(habits.map(item =>{
            if (item.id === habit.id ){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="habit">
            <button 
                className = "delete-btn"
                onClick={deleteHandler}
            >
                <i className="fa fa-minus-circle fa-lg"/>
            </button>
            <li className={`habit-item ${habit.completed ? "completed": ""}`} >{habitText}</li>
            <button 
                className = "complete-btn"
                onClick={completeHandler}
            >
                <i className="fa fa-check-circle fa-lg"/>
            </button>
            
        </div>
    );
}
 
export default Habit;