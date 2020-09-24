import React from 'react';
import { Link, } from "react-router-dom";
import { Button } from "react-bootstrap";

const NoMatch = () => (
  <div>
    <h1>No Content on this page 404; try typing NSFW into Reddit</h1>
    <Link to="/">
      <Button>Back</Button>
    </Link>
  </div>
)

export default NoMatch;