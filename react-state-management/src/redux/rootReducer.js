import todoReducer from "./reducers/todoReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  todos: todoReducer
})



export default rootReducer