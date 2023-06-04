import { Card } from "react-bootstrap"
import "./Welcome.css";

function Welcome() {
    return (
        <Card className="welcomecard flex justify-content-center align-items-center">
        <Card.Body>
            <h1>Welcome to Todos</h1>
            <p style={{textAlign: "center"}}>Please sign up or log in</p>
        </Card.Body>
    </Card>  
    );
      
  }
  
export default Welcome;