import React from 'react'
// JSX Version
const Hello = ()=>{
    // return(
    //     <div>
    //     <h1>Hello Chiru</h1>
    //     </div>
    // )
    // Without JSX
    return React.createElement(
        'div',
         {id:'hello', class:'dummyClass'}, 
          React.createElement('h1', null, 'Hello chiru'))
}
export default Hello    