import './App.css';
import {useState,React} from 'react';

function App() {
  const [count,setCounter]=useState(0)

  function updateCount(){
    setCounter(count +1)
  } 
  return (
    <>
    <h1>learning useState Hook</h1>
    <h2>You clicked button {count} times.</h2>
    <button onClick={updateCount}>Clicked Me</button>
    </>
  );
       
}

export default App;
