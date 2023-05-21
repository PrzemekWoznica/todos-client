import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({isAuthenticated, setIsAuthenticated}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let history = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/api/auth/login", {username, password});
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
                <Card style={{width: "60%", margin: "1em auto"}}>
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
            <Container style={{
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1>Log In</h1>
                <Card style={{width: "60%", margin: "1em auto"}}>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group style={{display: "flex", flexDirection: "column"}}>
                                <Form.Control
                                    className="my-3"
                                    style={{borderColor: "green"}}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Write username"
                                />
                                <Form.Control
                                    className="my-3"
                                    style={{borderColor: "green"}}
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