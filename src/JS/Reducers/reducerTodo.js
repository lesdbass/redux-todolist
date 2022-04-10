import {ADD_TODO,EDIT_TODO,DEL_TODO,DONE_TODO,SET_VISIBILITY_FILTER} from '../Constants/actionTypes';
const initState ={
    todos:[
        {
            id : 1,
            description : "Buy a new gaming laptop" ,
            isDone : false 
        },
        {
            id : 2,
            description : "Setup the system" ,
            isDone : false 
        },
        {
            id : 3,
            description : "Create a new application" ,
            isDone : false 
        },   {
            id : 4,
            description : "Dring a cafe" ,
            isDone : false 
        }
    ],

    filterStatus :'All'

}
const reducerTodolist = (state=initState,{type,payload}) =>{
    
    switch(type){
        case ADD_TODO :
            return {...state, todos:[...state.todos,payload]}
        case EDIT_TODO :
            return {...state,todos:state.todos.map((el)=>
              el.id ===payload.id ? {...el,description:payload.newDesc} :el  )}
        case DEL_TODO :
                return {...state ,todos:state.todos.filter((el)=> el.id != payload.id )}
        case DONE_TODO :
            return {...state , todos: state.todos.map((el)=> 
                el.id=== payload.id ? {...el,isDone:true} : el
                )}
        
         case SET_VISIBILITY_FILTER :

                   
                     return {...state,filterStatus:payload.filter } 


        default : 

        return state
    }

}








export default reducerTodolist; 