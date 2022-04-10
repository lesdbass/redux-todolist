import { ADD_TODO, DEL_TODO, DONE_TODO, EDIT_TODO ,SET_VISIBILITY_FILTER} from '../Constants/actionTypes'

export const addTodo =(newTodo) => {
    return {
        type:ADD_TODO,
        payload : newTodo
    }
}

export const editTodo = (id,newDesc) => {
    return {
        type : EDIT_TODO,
        payload : {id,newDesc}
    }    
}

export const delTodo = (id) => {
    return {
        type : DEL_TODO,
        payload : {id}
    }
}
export const doneTodo =(id) => {
    return {
    type : DONE_TODO,
    payload : {id}
}
}

export const FilterTodolist=(filter) => {
    return {
        type : SET_VISIBILITY_FILTER,
        payload : {filter}
    }
}