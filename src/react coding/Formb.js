import React from 'react';


function Formb(props){

    console.log(props);

    return(
        <div> 
            <h1> {props.formdata.name}</h1>
            <h1> {props.formdata.mobile}</h1>

        </div>
    )
}

export default Formb;