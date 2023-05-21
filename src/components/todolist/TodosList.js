import React, { useState, useEffect } from "react";
import { ListGroup, Button, Form } from "react-bootstrap";

export default function TodosList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        
    }, [])

    const changeStatus = () => {

    }

    const removeTodo = () => {
        
    }

    return (
        <ListGroup className="my-3">
                {todos.map((todo) => (
                    <ListGroup.Item
                        style={{display: "flex", justifyContent: "space-between"}} 
                        key={todo.id} 
                    >
                        <Form.Check checked={todo.finished} onChange={() => changeStatus(todo.id, todo.finished)}/>
                        <Form.Text style={{color: "black", maxWidth: "90%", wordWrap: "break-word"}}>{todo.description}</Form.Text>
                        <Button className="pull-right" onClick={() => removeTodo(todo.id)}>x</Button>
                    </ListGroup.Item>
                ))}
        </ListGroup>
    );
}