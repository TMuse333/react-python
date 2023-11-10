
import './App.css';
import React,{useState, useEffect} from 'react';



function App() {

const [data, setData] = useState([{}])

useEffect(()=> {
  fetch("/members").then(
    res => res.json()
  ).then(
    data => {
      setData(data)
      console.log(data)
    }
  )
  
},[])

  return (
    <div className='bg'>
   <h1 >Hustlers dont stop they keep going</h1>
   {(typeof data.members === 'undefined') ? (
    <p>Loading...</p>
   ): (
    data.members.map((member,i) => {
      <p key={i}></p>
    })
   )}
   </div>
  );
}

export default App;
