import { combineReducers } from "redux";
import reducerTodolist from "./reducerTodo";
import visibilityFilter from './reducerTodo';
const rootReducer = combineReducers({todo:reducerTodolist,visibilityFilter})

export default rootReducer;