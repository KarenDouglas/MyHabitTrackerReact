export const ADD_REWARD = "ADD_REWARD";
export const ADD_REWARDS = "ADD_REWARDS";

export  const addReward = (reward) => ({
    type: ADD_REWARD,
    payload: reward,
  });
  export const addRewards = rewards => ({
    type:ADD_REWARDS,
    payload: rewards
  });

  export const postRewards = (text, cost, purchased  ) => dispatch => {
    const newReward = {
        text,
        cost,
        purchased
        
    };
        

        
      return fetch( "http://localhost:8001/rewards/", {
          method: "POST",
          body: JSON.stringify(newReward),
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
      .then(response => dispatch(addRewards(response)))
      .catch(error => {
          console.log('post reward', error.message);
          alert('Your reward could not be posted\nError: ' + error.message);
      });
    
  };
  export const deleteReward = (id) => dispatch => {
  
    return fetch("http://localhost:8001/rewards/"+ id, {
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
    .then(response => dispatch(addRewards(response)))
    .catch(error => {
        console.log('post Reward', error.message);
    });
};