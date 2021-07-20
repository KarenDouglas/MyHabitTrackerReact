export const ADD_TODO = "ADD_TODO";
export const ADD_TODOS = "ADD_TODOS";
export const SET_TODO = "SET_TODO";
export  const TODOS_FAILED ="TODOS_FAILED"


export  const addTodo = (todoInputText) => ({
  type: ADD_TODO,
  payload: todoInputText,
});
export const addTodos = todos => ({
  type:ADD_TODOS,
  payload: todos
});

export const setTodo = todos => ({
  type:SET_TODO,
  payload: todos
});



export const postTodo = (text, completed) => dispatch => {
  const newTodo = {
      text,
      completed
  };
 // newTodo.completed= false;

    return fetch( "http://localhost:5000/todos", {
        method: "POST",
        body: JSON.stringify(newTodo),
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
    .then(response => dispatch(addTodos(response)))
    .catch(error => {
        console.log('post comment', error.message);
    });
};

export const completeTodo = (id, completed) => dispatch => {
  const complete= {completed: completed= true};
  const cb = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(complete)
};

    return fetch( "http://localhost:8001/todos/"+ id , cb)
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
    .then(response => dispatch(addTodos(response)))
    .catch(error => {
        console.log('post comment', error.message);
    });
};

export const deleteTodo = (id) => dispatch => {
  
    return fetch("http://localhost:8001/todos/"+ id, {
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
    .then(response => dispatch(addTodos(response)))
    .catch(error => {
        console.log('post comment', error.message);
    });
};

export const saveTodos = () => async (dispatch, getState) => {

  const todos = getState().todos;
  await fetch( "http://localhost:8001/todos/", {
        method: "POST",
        body: JSON.stringify(todos),
        headers: {
            "Content-Type": "application/json"
        }
    })
    alert("You just posted a new Todo!")
}

export const loadTodos = () =>  (dispatch, getState) => {

  const todos = fetch( "http://localhost:8001/todos/").then(res => res.json)
      dispatch (setTodo(todos))
}


export const fetchTodos = () => dispatch => {    
   
  return fetch("http://localhost:8001/todos/")
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
  }
)
      .then(response => response.json())
      .then(todos => {
        dispatch(addTodos(todos));
        //setTodos(todos);
      
      })
      .catch(error => {
        console.log('post comment', error.message);
    });
};
