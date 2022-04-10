import React  from 'react'
import {Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {FilterTodolist} from '../JS/Actions/todoActions'

const FilterTodo = () => {
    const filterSatus=useSelector((state)=>state.todo.visibilityFilter)
    const dispatch=useDispatch();
    //console.log(filterSatus)

    const updateFilter=(e) => {

      dispatch(FilterTodolist(e.target.value))
    }
  return (
    
        <Form.Select aria-label="Default select example" value={filterSatus} onChange={updateFilter} style={{width:"150px"}}>
             <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
        </Form.Select>
    
  )
}

export default FilterTodo