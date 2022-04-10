import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {Form,Button} from "react-bootstrap";
import {addTodo} from '../JS/Actions/todoActions'

const AddTodo = () => {
    const dispatch=useDispatch();
    const [desc,setDesc]=useState('');

    function getRando(min=5, max=99) {
      return   Math.floor(Math.random() * (max - min)) + min
    }

    const handleChange =(e)=> {
    
        e.preventDefault();
        if(desc) {
               dispatch(addTodo({id:getRando(),description:desc,isDone:false})) 
               setDesc('')
        }
    }

  return (
    <div>
        <Form style={{display:"flex" ,margin:"10px 10px"}} onSubmit={handleChange}>
                 <Form.Group className="mb-3" >
                 <Form.Control type="text" placeholder="Enter text" value={desc} onChange={(e)=>setDesc(e.target.value)}  style={{width:"400px", margin:"10px 10px"}}/>
                </Form.Group>
                 <Button className="btn btn-primary" style={{margin:"10px 10px"}} onClick={handleChange} >Save</Button>
        
        </Form>
    </div>
  )
}

export default AddTodo
