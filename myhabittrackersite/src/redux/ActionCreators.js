import { baseUrl } from '../shared/baseUrl';

export const ADD_TODO = "ADD_TODO";
export const POST_TODO = "POST_TODO";

export const addTodo = (todos) => ({
  type: ADD_TODO,
  payload: todos,
});

export const postTodo =(todoList) => ({
  type: POST_TODO,
  payload: todoList,
});

