import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 

function Logout({isAuthenticated, setIsAuthenticated}) {
	let history = useNavigate();

    useEffect(() => {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('username');
		setIsAuthenticated(false);
		history("/")
    }, [history, setIsAuthenticated])
}

export default Logout;