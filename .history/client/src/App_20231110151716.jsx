
import './App.css';
import React,{useState, useEffect} from 'react';



function App() {

const [data, setData] = useState([{}])

useEffect(()=> {
  fetch("/members").then(
    res => res.json()
  ).then(
    data => {
      
    }
  )
  )
})

  return (
    <div className='bg'>
   <h1 >Hustlers dont stop they keep going</h1>
   </div>
  );
}

export default App;
