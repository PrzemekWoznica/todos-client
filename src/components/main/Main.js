import Welcome from "../welcome/Welcome";
import AddTodo from "../adding/AddTodo"
import TodoList from "../todolist/TodosList";
import { Container } from 'react-bootstrap'

function Main({isAuthenticated, setIsAuthenticated}) {
  if(isAuthenticated == false){
    return (
      <Container className="my-3" style={{width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Welcome/>
      </Container>
    );
  } else {
    return (
      <Container className="my-3" style={{width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <AddTodo/>
        <TodoList />
      </Container>
    );
  }
  
}

export default Main;