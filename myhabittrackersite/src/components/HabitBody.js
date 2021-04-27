import React, {useState} from "react";
import Habit from "./Habit"



const  HabitBody= ({habits, setHabits}) => {
    return (
        <div className="habit-container">
            <ul className ="habit-list">
                {habits.map(habit => (
                    <Habit 
                        setHabits={setHabits}
                        habits={habits}
                        key={habit.id}
                        habit={habit}
                        habitText={habit.text}
                    />
                )) }
            </ul>        
        </div>  
    );
}
 
export default HabitBody;

