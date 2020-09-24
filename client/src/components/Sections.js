import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import SectionForm from './SectionForm';

const Sections = () => {
  const [sections, setSections] = useState([]);

  useEffect( () => {
    debugger;
    axios.get("/api/sections")
    .then((res) => {
      setSections(res.data);
    })
    .catch((err) => {
      alert("generic error message")
    });
  }, []);

  const [showForm, setShowForm] = useState(false);


  const renderSections = () => {
    if (sections.length <= 0) return <h2>No Departments Yet</h2>;

    return sections.map((section) => (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{section.name}</Card.Title>
    <Card.Text>
     This department has products you should buy.
    </Card.Text>
    <Button as={Link} to={`/api/sections/${section.id}`}>View Department</Button>
  </Card.Body>
</Card>
    ))
  }

  return(
  <div>
    <p>Departments</p>
    {showForm ? <SectionForm /> : null}
  <Button onClick={() => setShowForm(!showForm)}>{showForm ? "Close Form" : "Open Form"}</Button>
  <p>{renderSections()}</p>
  </div>
  )
}

export default Sections;