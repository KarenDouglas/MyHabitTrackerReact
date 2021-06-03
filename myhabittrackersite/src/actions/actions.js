export const ADD_TODO = "ADD_TODO";
export const SET_NOTES = "SET_NOTES";

export  const addTodo = (todosInputText) => ({
  type: ADD_TODO,
  payload: todosInputText,
});

