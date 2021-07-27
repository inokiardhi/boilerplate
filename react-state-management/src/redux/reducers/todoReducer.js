export const GET_TODOS = "GET_TODOS"; // saga middelware
export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";


const initialState = [
  {
    id: '',
    todo: '',
    isDone: ''
  }
]
const todoReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_TODOS: return action.payload; // action.payload must containt new all todos array from server set new todos to the entire state;
    case ADD_TODO: return [...state, action.payload]; // action.payload is new todo object
    case UPDATE_TODO: return state.map(lastTodo => { // action.payload is new version of todo object
      const {id, todo, isDone} = action.payload
      if(lastTodo.id !== id) return lastTodo;
      return {
        ...lastTodo,
        todo,
        isDone
      }
    });
    case DELETE_TODO: return state.filter(lastTodo => lastTodo.id !== action.payload) // action.payload is id of todo that will be deleted
    default: return state;
  }
}

export default todoReducer;