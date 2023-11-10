// Calculator.jsx
import React, { useState } from 'react';

const Calculator = ({ onCalculate, result }) => {
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

      {result && (
        <div>
          <p>The two numbers you entered are:</p>
          <p>{result.value1}</p>
          <p>{result.value2}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
