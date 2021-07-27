import { GET_TODOS, SET_TODOS, UPDATE_TODO, DELETE_TODO, ADD_TODO } from "../reducers/todoReducer";


export const getTodos = () => ({type: GET_TODOS});
export const setTodos = (payload) => ({type:SET_TODOS, payload}); // payload is new array of all todos
export const updateTodo = (payload) => ({type: UPDATE_TODO, payload}); // payload is new object of todo
export const deleteTodo = (payload) => ({type: DELETE_TODO, payload}); // payload is id of todo that will be deleted;
export const addTodo = (payload) => ({type: ADD_TODO, payload}); // payload is object of new todo that will be added;