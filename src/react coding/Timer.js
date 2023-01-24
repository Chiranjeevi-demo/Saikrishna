import React, {useState, useEffect} from 'react'
 let timerId;
export default function Timer() {

    const [timer, setTimer] = useState(0)
    

    useEffect(()=>{
        timerId = setInterval(()=>{
            setTimer((previous)=>{
                return previous +1
            })
        },1000)
    },[])

    const  stophandler=() => {
        clearInterval(timerId)
    }

  return (
    <div>

<h1> {timer}</h1>

<button onClick={stophandler}> Stop </button>

    </div>
  )
}
