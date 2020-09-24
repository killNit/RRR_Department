import React, {useState, useEffect}  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Jumbotron, Button,} from 'react-bootstrap';


const Section = ({name, match, history}) => {

  const [section, setSection] = useState({});
    axios.get(`/api/sections/${match.params.id}`)
    .then((res) => {
      setSection(res.data);
    })
    .catch((err) => {
      alert("Department error, sorry :(");
    });



  return(
    <div>
      <Jumbotron>
  {/* <h1>{section.name}</h1> */}
  <h1>{section.name}</h1>
  <p>
    Items for sale listed here
  </p>
  <p>
    <Button as={Link} to={`/api/sections/${section.id}/items`} variant="primary">add Item</Button>
  </p>
</Jumbotron>
    </div>
  );
};

export default Section;