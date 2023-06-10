import React, { createContext, useState, useContext, ReactElement } from 'react';

const storeData = {
  message: 'Hello World'
}
const SampleContext = createContext({});

export function useSampleContext() {
  return useContext(SampleContext);
}

export function ContextProvider({ children }: { children: ReactElement }) {
  const [context, setContext] = useState(storeData);
  // console.log({context})
  return (
    <>
      <SampleContext.Provider value={{context, setContext}}>
        {children}
      </SampleContext.Provider>
    </>
  )
}
