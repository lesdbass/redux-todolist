import React, { useState } from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {editTodo} from '../JS/Actions/todoActions'
const EditTodo = ({todo}) => {
    const [newDesc,setNewdesc]=useState(todo.description)
    const [show, setShow] = useState(false);
    const dispatch=useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
    const handleEdit =() => {
        dispatch(editTodo(todo.id,newDesc))
        handleClose()

    }

  return (
    <>
        <Button variant="primary" onClick={handleShow} style={{marginLeft:"5px"}}>
        Edit Todo
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
    <Form.Group className="mb-3" >
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Edit task" value={newDesc} onChange={(e)=>setNewdesc(e.target.value)}  />
    </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  )
}

export default EditTodo