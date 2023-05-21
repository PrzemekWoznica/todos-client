import { Card } from "react-bootstrap"

function Welcome() {
    return (
        <Card className="flex justify-content-center align-items-center" style={{width: "60%", margin: "1em auto"}}>
        <Card.Body>
            <h1>Welcome to Todos</h1>
            <p style={{textAlign: "center"}}>Please sign up or log in</p>
        </Card.Body>
    </Card>  
    );
      
  }
  
export default Welcome;