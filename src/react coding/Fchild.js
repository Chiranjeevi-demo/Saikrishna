import React,{useState}  from "react";
function Fchild(props){
    return(
            <div> 
                <p> We Receive Parent Data</p>
                <button onClick={() => props.onChange("Banglore") }> Click </button>
            </div>
    )
}
export default Fchild;