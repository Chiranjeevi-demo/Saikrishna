import React,{useState, useMemo} from 'react'
import Usememochild from './Usememochild'

 function Usememo() {
    const [count, setCount] = useState(0);
    
    function clickhandler(){
        setCount(count+1)
    }

    const memochild = useMemo(()=>{
        return <Usememochild></Usememochild>
    },[count])

  return (
    <div>

<h1> Count: {count }</h1>
<button onClick={clickhandler}> Click </button>

<h1> use memo</h1>
<Usememochild/> 

<h1> Hi usememo 1</h1>
 <h2> {memochild}</h2> 

    </div>
  )
}

export default Usememo;
