import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resoureces, setResources] = useState([]);

  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
      
      setResources(response.data);
      })(resource);
    },
    [resource]
  );

  return (
    <ul>
      {resoureces.map(record => <li key={record.id}>{record.title}</li>)}
    </ul>
  );
}

export default ResourceList;