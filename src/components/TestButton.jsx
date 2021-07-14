import {useState} from 'react';

const TestButton = () => {
  const [buttonState, setButtonState] = useState("Initial state");

  return (
    <div>
    <h1>{buttonState}</h1>
    <button onClick={() => setButtonState("Button clicked")}>Button: click me!</button>
    </div>
  );
};

export default TestButton;