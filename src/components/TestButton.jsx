
const TestButton = ({buttonState, onClick}) => {
  return (
    <div>
    <h1>{buttonState}</h1>
    <button onClick={onClick}>Button: click me!</button>
    </div>
  );
};

export default TestButton;