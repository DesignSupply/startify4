import React, { useState, useEffect } from 'react';
import ExampleComponent from './components/ExampleComponent'

const App: React.FC = () => {
  const [text, setText] = useState('ExampleComponent');
  useEffect(() => {
    console.log('React is ready.');
  }, []);
  return (
    <>
      <ExampleComponent message={text} />
    </>
  )
}

export default App;