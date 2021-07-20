import React, { useContext} from "react";
import { useDispatch } from "react-redux";
import { postHabits, fetchHabits , addHabits} from "../actions/habits";
import { AuthContext } from "../shared/auth-context";
import { useHttpClient } from '../shared/http-hook';




const HabitHeader = ({setHabitInputText, habits, setHabits, habitInputText, hCompleted, setHCompleted,habitCounter, sethabitCounter, dailyStreak, setDailyStreak}) => {
    const auth = useContext(AuthContext);
    const{ isLoading, error, sendRequest, clearError} = useHttpClient();

    const dispatch = useDispatch();
const habitInputTextHandler =(e) =>{
    console.log(e.target.value);
    setHabitInputText(e.target.value)

}

const  submitHabitHandler= async (e) => {
        e.preventDefault();

        setHabits([...habits, {text: habitInputText, streak: 0, dailyStreak: 0}]);

        const formData= {text: habitInputText, streak: 0, dailyStreak: 0, user: auth.userId}
    try {
        await sendRequest('http://localhost:5000/habits', 
        'Post',
        JSON.stringify(formData),
        {
          'Content-Type': 'application/json'            
        },
    );
  
      } catch (err) {
        alert(err.message)
      }

        setHabitInputText("");
        sethabitCounter(0); 
        setDailyStreak(0) ;     


        
    //     const text =habitInputText;
    //     const streak = habitCounter;
    //    dispatch(postHabits(text, streak, dailyStreak));

       
    //     setTimeout( ()=> {
    //         fetch('http://localhost:8001/habits/')
    //         .then(response => {
    //             if (response.ok) {
    //                 return response;
    //             } else {
    //                 const error = new Error(`Error ${response.status}: ${response.statusText}`);
    //                 error.response = response;
    //                 throw error;
    //             }
    //         },
    //     error => {
    //         const errMess = new Error(error.message);
    //         throw errMess;
    //     })
            
    //         .then(response => 
    //             response.json()
    //         )
    //         .then(habits => {
    //             setHabits(habits);
    //         })
    //         .then(habits => { 
    //             dispatch(addHabits(habits));
    //         })
    //         .catch(error => {
    //             console.log('post habit', error.message);
    //         });
    //     }, 3000)
         
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
