import React, { useState } from "react";

const CalculatorWithJestTestCases = () => {
  const [input, setInput] = useState("");

  const arrayButtons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "C",
    "+",
    "=",
  ];

  const handleCalculations = (value) => {
    console.log(value);
    
  }

  return (
    <>
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {arrayButtons.map((item, i) => (
            <button key={i} onClick={() => handleCalculations(item)}>{item}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalculatorWithJestTestCases;
