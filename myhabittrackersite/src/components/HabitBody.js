import React, {useState} from "react";
import Habit from "./Habit"



const  HabitBody= ({habits, setHabits, sethabitCounter, habitCounter, dailyStreak,setDailyStreak, points, setPoints}) => {
    
    return (
        <div className="habit-container">
            <ul  className ="habit-list">
                {habits.map(habit => (
                    <Habit 
                        setHabits={setHabits}
                        habits={habits}
                        habit={habit}
                        habitText={habit.text}
                        habitCounter = {habitCounter}
                        sethabitCounter={sethabitCounter}
                        dailyStreak={dailyStreak}
                        setDailyStreak={setDailyStreak}
                        points={points}
                        setPoints={setPoints}
                    />
                )) }
            </ul>        
        </div>  
    );
}
 
export default HabitBody;

