import React, {useState} from 'react'
import "./styles.css";

export default function App() {
  const [btn, setBtn] = useState(false)

  function click1(){
    setBtn((prestate)=>{
        return !prestate
       })
     }

  return (
    <div className="App">
    
<h2> 
{(btn) && <div> Diaplay Data </div>} </h2>

<button onClick={click1}> Click </button>
   
    </div>
  );
}
