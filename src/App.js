import React, {useState, useEffect} from'react'
import ShowDetail from './ShowDetail'

function App(){

  const[state, setState] = useState([])
  useEffect (() => {
    fetch("https://api.tvmaze.com/shows?page=1")
    .then(response => response.json())
    .then(data => setState(data))
  },[])
  return(
    <>
    <h1>tvmaze | shows</h1>
    {state.map((s) =>
      <ShowDetail key={s.id} show={s}/> 
    )}
    </>
  )
}

export default App




