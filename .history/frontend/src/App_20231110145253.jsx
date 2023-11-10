import  from 'react'{ useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [data,setData] = useState([{}])

  useEffect(() => {
    fetch("/members")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.text(); // Get the raw response text
      })
      .then((data) => {
        console.log("Raw Response Text:", data); // Log the raw response
        setData(JSON.parse(data)); // Attempt to parse the JSON
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  return (
    <>
  
    </>
  )
}

export default App
