import React from 'react'
import { useDispatch } from 'react-redux'
import {delTodo,doneTodo} from '../JS/Actions/todoActions'
import EditTodo from './EditTodo'

const Todo = ({todo}) => {
    const dispatch=useDispatch()
    
    const handledComplete=(id) =>
    {
            
            dispatch(doneTodo(id))
    }
    const del=(id)=> {
 
        dispatch(delTodo(id))
        
      }
  return (
  

        <tr>
        <th scope="row">{todo.id}</th>
            <td >{todo.description}</td>
             <td >{(todo.isDone) ? "Complete" :"Incomplete"}</td>
            <td >
             <button className="btn btn-danger" onClick={()=>del(todo.id)} >Delete</button>
             <button className="btn btn-success ms-1" onClick={()=>handledComplete(todo.id)}>Finished</button>
             <EditTodo todo={todo} />
            </td>
        </tr>
    

  )
}

export default Todo