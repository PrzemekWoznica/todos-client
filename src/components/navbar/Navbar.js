import { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Menu({isAuthenticated, setIsAuthenticated}) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        setUsername(sessionStorage.getItem("username"));
    }, [isAuthenticated])

    const authButtons = () => {
        if(isAuthenticated === false){
            return (
                <Nav>
                    <Link className="link" to="/signup">
                        Sign up
                    </Link>
                    <Link className="link" to="/login">
                        Log in
                    </Link>
                </Nav>   
            );
        } else {
            return (
                <Nav className='flex justify-content-center align-items-center'>
                    <p className='logged'>You are logged as: {username}</p>  
                    <Link className="link" to="/logout">
                        Log out
                    </Link>
                </Nav>  
            );
        }
        
    }

    return (
        <Navbar className="flex justify-content-between align-items-center" bg="dark">
            <Link to="/" style={{textDecoration: "none"}}>
                <h1 className="brand">Todos</h1>
            </Link>
            {authButtons()}
        </Navbar>
        
    );
}