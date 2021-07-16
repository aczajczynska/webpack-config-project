import { useState } from 'react';

const TestButton = ({ onClick, buttonText }) => {
  return (
    <div>
      <h1>{buttonText}</h1>
      <button onClick={onClick}>Add Lazy Content!</button>
    </div>
  );
};

export default TestButton;
