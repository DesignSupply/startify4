import React, { createContext, useState, useContext } from 'react';
import ExampleComponent from './components/ExampleComponent';

const storeData = {
  message: 'Hello World'
}
const SampleContext = createContext({});

const App: React.FC = () => {
  const [text, setText] = useState('ExampleComponent');
  const [context, setContext] = useState(storeData);
  console.log(`React is ready. ${context.message}`);
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