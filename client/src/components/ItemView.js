import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemView = ({match}) => {
  const [item, setItem] = useState[{}];

  useEffect(() => (
  axios.get(`/api/sections/${match.params.id}`)
  ),[]);

  return(
    <div>
      <h1>Item View</h1>
    </div>
  );
};

export default ItemView;