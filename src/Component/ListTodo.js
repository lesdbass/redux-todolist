import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';
const ListTodo = () => {
        const todolist =useSelector((state)=>state.todo.todos)
        const filter = useSelector((state)=>state.todo.filterStatus)
const filterapply=() => {
  switch(filter){
    case "All" : return (todolist.map((el)=><Todo todo={el} key={el.id} />))
    case "Complete" :
      return (todolist.filter(e => e.isDone).map((el)=><Todo todo={el} key={el.id} />))
      case "Incomplete" :
        return (todolist.filter(e => !e.isDone).map((el)=><Todo todo={el} key={el.id} />)) 
    default :
  }
  }

        return (
    <div>

<section className="vh-100" style={{backgroundColor: "#eee" }} >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card rounded-3">
          <div className="card-body p-4">

            <h4 className="text-center my-3 pb-3">To Do App</h4>
            <AddTodo />
           <FilterTodo />
           
            <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                    
                    { filterapply() }                   
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ListTodo