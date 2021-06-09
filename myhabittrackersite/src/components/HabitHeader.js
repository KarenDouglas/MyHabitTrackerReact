import React from "react";




const HabitHeader = ({setHabitInputText, habits, setHabits, habitInputText, hCompleted, setHCompleted,habitCounter, sethabitCounter, dailyStreak, setDailyStreak}) => {

const habitInputTextHandler =(e) =>{
    console.log(e.target.value);
    setHabitInputText(e.target.value)

}

const  submitHabitHandler= (e) => {
        e.preventDefault();
        setHabits([...habits, {text: habitInputText, counter:0, hCompleted: false, dailyStreak: 0}]);
        const habit= { text: habitInputText, hCompleted,  habitCounter, dailyStreak};
        fetch("http://localhost:8001/habits",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(habit)
        })

        console.log(habit)
        setHabitInputText("");
        sethabitCounter(0) 
        setDailyStreak(0)       
};
 


    return (  

      
        <React.Fragment>
        <form className="habit-form">
          <input value={habitInputText} placeholder="Enter New Habit" onChange = {habitInputTextHandler} type="text" className="habit-input"/>
          <button onClick={submitHabitHandler} className= "habit-button" type="submit"><i className="fa fa-plus-square fa-lg"/></button>
        </form>
        </React.Fragment>
    );
}
 
export default HabitHeader;
