// Calculator.jsx
import React, { useState } from 'react';

const Calculator = ({ onCalculate }) => {
  const [expression, setExpression] = useState("");

  const handleCalculate = () => {
    onCalculate(expression);
  };

  return (
    <div>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default Calculator;
