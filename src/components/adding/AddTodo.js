import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap"

export default function AddDocument() {
    const [description, setDescription] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        
    };

    return (
        <Card style={{width: "100%"}}>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group style={{display: "flex"}}>
                        <Form.Control
                            className="mx-2"
                            style={{borderColor: "green"}}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write todos here"
                        />
                        <Button className="mx-2" variant="success" type="submit">Add Todo</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>  
    );
}