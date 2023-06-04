import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap"
import "./Add.css"
import axios from "axios";

export default function AddDocument({setAdded}) {
    const [description, setDescription] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let username = sessionStorage.getItem("username");
        let token = sessionStorage.getItem("token");
        await axios.post("/api/todos", {username, description}, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(setAdded(true));
        setDescription("");
    };

    return (
        <Form className="formcontainer" onSubmit={handleSubmit}>
            <Form.Group style={{display: "flex"}}>
                <Form.Control
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write todos here"
                />
                <Button variant="success" type="submit">Add Todo</Button>
            </Form.Group>
        </Form> 
    );
}