import React from 'react'
import Contextb from './Contextb'

const Contexta = ()=>{
    return (
        <div>
            <Contexta.provider value="20">
                <Contextb.Consumer/>
            </Contexta.provider>
    
        </div>
    )
}
export default Contexta;

























// import React from 'react';
// import Contextb from './Contextb'

// export let context = React.createContext();

// function Contexta(){

//    var name = "React Js Developer"
//     return(
//         <div>
//             <h1> Hii A</h1>
//             <context.Provider  value={name}>
//                 <Contextb/>
//             </context.Provider>
//         </div>
//     )
// }

// export default Contexta;