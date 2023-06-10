import React, { useState, useEffect } from 'react';
import ExampleComponent from './components/ExampleComponent';
import { ContextProvider } from './ContextProvider';

const App: React.FC = () => {
  const [text, setText] = useState('ExampleComponent');
  return (
    <>
      <ContextProvider>
        <ExampleComponent message={text} />
      </ContextProvider>
    </>
  )
}

export default App;