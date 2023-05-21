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

	return (
		<div className="text-center">
			<h1>Successfully sign out</h1>
		</div>
	)
}

export default Logout;