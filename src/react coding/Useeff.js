
import React, { useContext, useEffect, useState } from 'react';

function Useeff() {

    const [show, setShow] = useState(false);
    
    useEffect(() => {
        console.log('i am component Didmount')
         return () => {
            console.log('iam clearing')
        }
    },[])

    useEffect(() => {
        console.log('i am update')
        return () => {
            console.log(' i am clearing from update')
        }
    }, [show])


    return (
        <div>
            <div>Ravi</div>
            {console.log('renderMehtod===>')}
            <button type='button' onClick={() => setShow(pre => !pre)}>Show</button>
        </div> 
    )
}

export default Useeff;



























































// useEffect()
// -------------------
// componentDidMount()
// componentDidUpdate()
// componentWillUnMount()


// useEffect(()=>{
//     fetch("url")
//     return;
// },[])   ----------------> ComponentDidMount()

// useEffect(()=>{
//     fetch("url")
//     return;
// },[dinamicdata]) -------> componentDidUpdate()


// useEffect(()=>{
//     return function(){};
// },[])  ------> componentWillUnMount();