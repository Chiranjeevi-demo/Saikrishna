import React,{useEffect, useRef} from "react";

function Useref(props){
    const ref = useRef(null);
    console.log('button clicked 1111', ref)

    const handlerButton = () => {
        console.log('button clicked', ref.current.focus())
    }

    useEffect(() => {
        console.log('button clicked', ref.current.focus())
    })

    return(
            <div>
                 <h2> Use ref</h2>

                 <form>
                     <label ref={ref}> Name </label>
                     <input ref={ref} type="text" placeholder="Name"/>

                     <button type="button" onClick={handlerButton}> Submit </button>
                 </form>
            </div>

    )
}

export default Useref;