import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

const SectionForm = ({history}) => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    // debugger;
    axios.post("/api/sections", {name})
    .then((res) => {
      history.push("/sections")
    })
    .catch((err) => {
      alert("Section did not add, error 801")
    });
  }

  
  return(
    <div>
      <Form onSubmit={handleSubmit}>
  <Form.Group controlId="SectionForm">
    <Form.Label>Department Name</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Name of Department" 
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    />
    <Form.Text className="text-muted">
      What, our departments aren't good enough for you?!?
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )

};

export default SectionForm;