export const ADD_POINTS = "ADD_POINTS";

export  const addPoints = (points) => ({
    type: ADD_POINTS,
    payload: points,
  });

  export const setTotalPoints = (points) => dispatch => {
    const pointsTotal = {
       points
        
    };
        

        
      return fetch( "http://localhost:8001/points/", {
          method: "POST",
          body: JSON.stringify(pointsTotal),
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
      .then(response => dispatch(addPoints(response)))
      .catch(error => {
          console.log(error.message);
      });
    
  };