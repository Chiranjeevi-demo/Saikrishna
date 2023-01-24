import React from 'react';

function Parentc(props){
    return(
        <div> 
          <button onClick={() => props.onChange("Updated Value") }> Click </button>
        </div>
    )
}
export default Parentc;