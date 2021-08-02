import { useState } from "react";

const TestButton = ({ onClick, buttonText }) => {
  return (
    <div className="button-container">
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default TestButton;
