import React, { createContext, useState, useContext, useEffect } from 'react';
import ExampleComponent from './components/ExampleComponent';

const storeData = {
  message: 'Hello World'
}
const SampleContext = createContext({});

const App: React.FC = () => {
  const [text, setText] = useState('ExampleComponent');
  const [context, setContext] = useState(storeData);
  console.log(`React is ready. ${context.message}`);
  useEffect(() => {
    setContext({message: 'state updated'});
  }, []);
  return (
    <>
      <SampleContext.Provider value={{context, setContext}}>
        <ExampleComponent message={text} />
      </SampleContext.Provider>
    </>
  )
}

export function useSampleContext() {
  return useContext(SampleContext);
}

export default App;