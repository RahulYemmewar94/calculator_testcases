import React, { useState } from "react";

const CalculatorWithJestTestCases = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="calculator">
        <div className="display">{"0"}</div>
        
      </div>
    </>
  );
};

export default CalculatorWithJestTestCases;
