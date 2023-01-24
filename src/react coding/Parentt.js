import React, {useState} from 'react';
import Parentc from './Parentc'


function Parentt(){
    const [val, setVal] = useState("initial value")
    return(
        <div>
            <div> {val}</div>
            <Parentc onChange={(value)=> setVal(value)} />  
        </div>
    )
}
export default Parentt;


