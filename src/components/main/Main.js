import Welcome from "../welcome/Welcome";
import AddTodo from "../adding/AddTodo"
import TodoList from "../todolist/TodosList";
import { Container } from 'react-bootstrap'
import "./Main.css"
import { useState } from "react";

function Main({isAuthenticated, setIsAuthenticated}) {
  const [added, setAdded] = useState(false);

  if(isAuthenticated === false){
    return (
      <Container className="cont my-3">
        <Welcome/>
      </Container>
    );
  } else {
    return (
      <Container className="cont my-3">
        <AddTodo setAdded={setAdded}/>
        <TodoList added={added} setAdded={setAdded}/>
      </Container>
    );
  }
  
}

export default Main;