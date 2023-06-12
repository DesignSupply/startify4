import React, { createContext, useState, useContext, useEffect } from 'react';
import ExampleComponent from './components/ExampleComponent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

// store
const storeData = {
  message: 'Hello World'
}
const SampleContext = createContext({});

// route
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

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
        <RouterProvider router={router} />
        <ExampleComponent message={text} />
      </SampleContext.Provider>
    </>
  )
}

export function useSampleContext() {
  return useContext(SampleContext);
}

export default App;