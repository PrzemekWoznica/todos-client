import { useState } from "react";
import Login from "./components/auth/Login.js";
import Signup from "./components/auth/Signup.js";
import Main from "./components/main/Main.js";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/auth/Logout.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <Routes>
          <Route exact path="/" element={<Main isAuthenticated={isAuthenticated}/>}/>
          <Route exact path="/signup" element={<Signup isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route exact path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route exact path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
