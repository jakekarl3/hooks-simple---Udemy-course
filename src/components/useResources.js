import { useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
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

  return resoureces;
};

export default useResources;