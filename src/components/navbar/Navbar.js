import { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Menu({isAuthenticated, setIsAuthenticated}) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        setUsername(sessionStorage.getItem("username"));
    }, [isAuthenticated])

    const authButtons = () => {
        if(isAuthenticated == false){
            return (
                <Nav>
                    <Link to="/signup" style={{
                        color: "white",
                        fontSize: "1.5em",
                        margin:"0 1em",
                        textDecoration: "none"
                    }}>
                        Sign up
                    </Link>
                    <Link to="/login" style={{
                        color: "white",
                        fontSize: "1.5em",
                        margin:"0 1em",
                        textDecoration: "none"
                    }}>
                        Log in
                    </Link>
                </Nav>   
            );
        } else {
            return (
                <Nav className='flex justify-content-center align-items-center'>
                    <p style={{margin: "0", fontSize: "1.5em", color: "white"}}>
                        You are logged as: {username}
                    </p>  
                    <Link to="/logout" style={{
                        color: "white",
                        fontSize: "1.5em",
                        margin:"0 1em",
                        textDecoration: "none"
                    }}>
                        Log out
                    </Link>
                </Nav>  
            );
        }
        
    }

    return (
        <Navbar className="menu flex justify-content-between" bg="dark">
            <Link to="/" style={{textDecoration: "none"}}>
                <Navbar.Brand style={{
                    color: "white", 
                    fontSize: "2.5em", 
                    margin:"0 1em"
                }}>
                    Todos
                </Navbar.Brand>
            </Link>
            {authButtons()}
        </Navbar>
        
    );
}