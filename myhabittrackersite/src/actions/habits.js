import { connectAdvanced } from "react-redux";


export const ADD_HABIT = "ADD_HABIT";
export const ADD_HABITS = "ADD_HABITS";
export const ADD_STREAK = "ADD_STREAK";


    export  const addHabit = (habit) => ({
    type: ADD_HABIT,
    payload: habit,
  });
  export const addHabits = habits => ({
    type:ADD_HABITS,
    payload: habits
  });
  export const addStreak1 = habits => ({
    type:ADD_STREAK,
    payload: habits
  });
  

  

export const postHabits = (text, streak, dailyStreak) => dispatch => {
    const newHabit = {
        text,
        streak,
        dailyStreak
        
    };
        

        
      return fetch( "http://localhost:8001/habits/", {
          method: "POST",
          body: JSON.stringify(newHabit),
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(response => {
              if (response.ok) {
                  return response;
              } else {
                  const error = new Error(`Error ${response.status}: ${response.statusText}`);
                  error.response = response;
                  throw error;
              }
          },
          error => { throw error; }
      )
      .then(response => response.json())
      .then(response => dispatch(addHabits(response)))
      .catch(error => {
          console.log('post habit', error.message);
          alert('Your habit could not be posted\nError: ' + error.message);
      });
    
  };
  
  

  export const addStreak = (id,   streak, dailyStreak) => dispatch => {

    
        const newStreak= {streak, dailyStreak};

        const cb = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStreak)
        };
  
      return fetch( "http://localhost:8001/habits/"+ id , cb)
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
            throw error; 
        })
        .then(response => response.json())
        .then(response => dispatch(addHabits(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your todo could not be posted\nError: ' + error.message);
        });
      
  };

  export const deleteStreak = (id, streak, dailyStreak) => dispatch => {
    const newStreak= {streak: streak = 0, dailyStreak: dailyStreak = 0};
    const cb = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStreak)
  };
  
      return fetch( "http://localhost:8001/habits/"+ id , cb)
      .then(response => {
              if (response.ok) {
                  return response;
              } else {
                  const error = new Error(`Error ${response.status}: ${response.statusText}`);
                  error.response = response;
                  throw error;
              }
          },
          error => { throw error; }
      )
      .then(response => response.json())
      .then(response => dispatch(addHabits(response)))
      .catch(error => {
          console.log('post comment', error.message);
          alert('Your todo could not be posted\nError: ' + error.message);
      });
  };
  export const deleteDailyStreak = (id, streak, dailyStreak) => dispatch => {
    const newStreak= {streak: streak = 0, dailyStreak: dailyStreak = 0};
    const cb = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStreak)
  };
  
      return fetch( "http://localhost:8001/habits/"+ id , cb)
      .then(response => {
              if (response.ok) {
                  return response;
              } else {
                  const error = new Error(`Error ${response.status}: ${response.statusText}`);
                  error.response = response;
                  throw error;
              }
          },
          error => { throw error; }
      )
      .then(response => response.json())
      .then(response => dispatch(addHabits(response)))
      .catch(error => {
          console.log('post comment', error.message);
          alert('Your todo could not be posted\nError: ' + error.message);
      });
  };
export const fetchHabits = () => dispatch => {    
    return fetch('http://localhost:8001/habits')
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
    .then(response => response.json())
    .then(habits => dispatch(addHabits(habits)))
    .catch(error => {
        console.log('post comment', error.message);
        alert('Your todo could not be posted\nError: ' + error.message);
    });
};
export const deleteHabit = (id) => dispatch => {
  
    return fetch("http://localhost:8001/habits/"+ id, {
      method: "DELETE"
     })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addHabits(response)))
    .catch(error => {
        console.log('post habit', error.message);
    });
};