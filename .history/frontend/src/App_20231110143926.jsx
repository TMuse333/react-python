import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [data,setData] = useState([{}])

  useEffect(()=>{
    fetch("/members").then(
      res => res.json()
    ).then(
      data=> {
        setData(data)
        console.log
      }
    )
  })

  return (
    <>
    <h1>Hustlers dont stop they keep going</h1>
    </>
  )
}

export default App
