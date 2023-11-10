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

  // const handleCalculate = (expression) => {
  //   fetch("/calculate", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ expression }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setResult(data.result);
  //     });
  // };

  return (
    <div className='bg'>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Members:</p>
          {data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))}
        </div>
      )}

      <Calculator onCalculate={handleCalculate} />

      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
