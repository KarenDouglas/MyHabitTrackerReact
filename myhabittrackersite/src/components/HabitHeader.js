import React, {useState} from "react";




const HabitHeader = ({setHabitInputText, habits, setHabits, habitInputText}) => {

const habitInputTextHandler =(e) =>{
    console.log(e.target.value);
    setHabitInputText(e.target.value)

}

const  submitHabitHandler= (e) => {
        e.preventDefault();
        setHabits([...habits, {text: habitInputText, counter: 0, completed: false, id: Math.random()*1000 }]);
        setHabitInputText("");
};
 


    return (  

      
        <React.Fragment>
        <form className="habit-form">
          <input value={habitInputText} onChange = {habitInputTextHandler} type="text" className="habit-input"/>
          <button onClick={submitHabitHandler} className= "habit-button" type="submit"><i className="fa fa-plus-square fa-lg"/></button>
        </form>
        </React.Fragment>
    );
}
 
export default HabitHeader;
