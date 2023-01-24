import React from 'react'

// function 
// function Greet (){
//     return(
//         <h1>Function component</h1>
//     )
// }

// ES6 Feature
const Greet=(props)=>{
    console.log(props)
    return(
        <div>
<h1>Hello {props.name} a.k.a {props.heroName}</h1>
{props.children}
</div>
    )
}
export default Greet