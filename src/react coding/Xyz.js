import React, { useEffect, useState } from 'react';
import { context } from './App';

function Xyz(props) {
    
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    useEffect(() => {
        console.log('i am component Didmount')
        return () => {
            console.log('iam clearing')
        }
    })

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

export default Xyz;
