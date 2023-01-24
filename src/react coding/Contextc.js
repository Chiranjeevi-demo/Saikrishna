import React,{useContext} from 'react';

import {context} from './Contexta'

function Contextc(props){
    let data = useContext(context);
    return(
        <div>
            <h1> Hii C</h1>
            <h3> {data}</h3>
        </div>
    )
}
export default Contextc;