import React, { useState } from 'react'

function FunCounter() {

    const [counter, setCounter] = useState(0);

    const [name, setName] = useState('Veera')

    const increment = () => {
        setCounter((prestate) => {
            return prestate + 1;
        })
    }
    function changName() {
        setName((prestate) => {
            return "Ravi"
        })
    }
    return (
        <div>
            <h1> Function Component in Counter </h1>
            <h1> Counter :  {counter}</h1>

            <button onClick={increment}> Click  </button>

            <h1> {name} </h1>
            <button onClick={changName}> Click Here</button>
            <br />
            <br />
            <br />
        </div>
    )
}
export default FunCounter;