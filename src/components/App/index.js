import React, { useState } from 'react';

const App = () => {
  const [resourse, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {resourse}
    </div>
  );
};

export default App;