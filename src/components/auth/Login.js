import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css"

export default function Login({isAuthenticated, setIsAuthenticated}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let history = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("/api/auth/login", {username, password});
            sessionStorage.setItem("username", response.data.username);
            sessionStorage.setItem("token", response.data.token);
            setIsAuthenticated(true);
                    
            setUsername("");
            setPassword("");
            setError("");
            history("/");
        } catch(e){
            setIsAuthenticated(false);
            setError(e.response.data.erroMessage);
        }  
    };

    const showError = () => {
        if(error !== ""){
            return (
                <Card className="card">
                    <Card.Body>
                        <p>Wrong credentials</p>
                        <p>{error}</p>
                    </Card.Body>
                </Card>
            );
        } else {
            return (<div></div>);
        }
    }

        return (
            <Container className="kontener">
                <h1>Log In</h1>
                <Card className="card">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="group">
                                <Form.Control
                                    className="control my-3"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Write username"
                                />
                                <Form.Control
                                    className="cotrol my-3"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Write password"
                                />
                                <Button variant="success" type="submit">Login</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                {showError()}
            </Container>
              
        );    
}