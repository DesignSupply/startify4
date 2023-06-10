import React, { useEffect } from 'react';

interface propsInterface {
  message: string
}

const ExampleComponent: React.FC<propsInterface> = (props) => {
  return (
    <>
      <p>{props.message}</p>
    </>
  )
}

export default ExampleComponent;