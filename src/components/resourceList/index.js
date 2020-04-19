import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = () => {
  const [resoureces, setResources] = useState([]);
  
  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
      
    this.setState({ resources: response.data });
  }

  return (
    <div>
      {resoureces.length}
    </div>
  );
}

export default ResourceList;