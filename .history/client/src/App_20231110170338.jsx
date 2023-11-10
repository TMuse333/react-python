// App.jsx
import './App.css';
import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator'; // Import the Calculator component

function App() {
  const [data, setData] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const handleCalculate = (expression) => {
    // Assuming the expression contains two numbers separated by a comma
    const [value1, value2] = expression.split(",").map(Number);

    // Update the result state with the two numbers
    setResult({ value1, value2 });
  };

  return (
    <div className='bg'>
     
     <div className=''
     <h1></h1>

      <Calculator onCalculate={handleCalculate} result={result} />
    </div>
  );
}

export default App;
