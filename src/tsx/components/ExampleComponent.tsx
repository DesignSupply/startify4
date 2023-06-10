import React, { useEffect } from 'react';
import { useSampleContext } from '../ContextProvider';

interface propsInterface {
  message: string
}

const ExampleComponent: React.FC<propsInterface> = (props) => {
  const contextValue = useSampleContext();
  useEffect(() => {
    console.log(`React is ready. ${contextValue.context.message}`);
  }, []);
  return (
    <>
      <p>{props.message}</p>
    </>
  )
}

export default ExampleComponent;