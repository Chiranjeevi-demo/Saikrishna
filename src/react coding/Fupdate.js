import React,{useState}  from "react";
import Fchild from "./Fchild";
function Fupdate(props){
    const [name, setName] = useState("Hyderabad")
    return(
            <div> 
               <h1> {name}</h1>
            <Fchild onChange={(name)=> setName(name)}/>
            </div>
    )
}
export default Fupdate;





// function Fupdate(){

//     const [name, setName] = useState("veera")

//     function changetext(){
//         setName("Ravi")
//     }
    
//     return(
//         <div>
//                 <h1> {name}</h1>

//                 <button onClick={changetext}> Click </button>
//         </div>
//     )
// }


