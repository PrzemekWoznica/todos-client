import { useEffect, useState } from "react";
import { ListGroup, Button, Form } from "react-bootstrap";
import "./TodosList.css";
import axios from "axios";

export default function TodosList({added, setAdded}) {
    const [todos, setTodos] = useState([]);
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        let token = sessionStorage.getItem("token");
        axios.get("/api/todos/" + username, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            setTodos(response.data.todoList);
        })
    }, []);

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        let token = sessionStorage.getItem("token");
        axios.get("/api/todos/" + username, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            setTodos(response.data.todoList);
            setAdded(false);
            setChanged(false);
        })
    }, [added, changed]);

    const changeStatus = (id) => {
        let username = sessionStorage.getItem("username");
        let token = sessionStorage.getItem("token");
        axios.put("/api/todos/" + username + "/" + id, {},  {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        setChanged(true);
    }

    const removeTodo = (id) => {
        let username = sessionStorage.getItem("username");
        let token = sessionStorage.getItem("token");
        axios.delete("/api/todos/" + username + "/" + id, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        setChanged(true);
    }

    return (
        <ListGroup className="group my-3">
                {todos.map((todo) => (
                    <ListGroup.Item
                        style={{display: "flex", justifyContent: "space-between"}} 
                        key={todo.id} 
                    >
                        <Form.Check checked={todo.isFinished} onChange={() => changeStatus(todo.id)}/>
                        <Form.Text className="description">{todo.description}</Form.Text>
                        <Button className="pull-right" onClick={() => removeTodo(todo.id)}>x</Button>
                    </ListGroup.Item>
                ))}
        </ListGroup>
    );
}