import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {incrementCounter, decrementCounter, incrementfive, decrementfive } from '../src/redux/Action'

function Reduxcompnent(){

    let countvalue = useSelector((state) => {
      //  console.log('state====',state)
        if(state &&  state.Reducer && state.Reducer.count )
        return  state.Reducer.count
        else return 0
    }) 

    let userdata = useSelector((state) => {
        //  console.log('state====',state)
          if(state &&  state.Reducer && state.Reducer.obj )
          return  state.Reducer.obj
          else return []
      }) 

    

    let  usercount = useSelector((state) => {
        //console.log('state====',state)
        if(state && state.Reducer1 && state.Reducer1.usercount)
        return state.Reducer1.usercount
         else return 0
    })

   
    let dispatch = useDispatch();

    const increment =()=>{
        dispatch(incrementCounter())
    }
    const decrement =()=>{
        dispatch(decrementCounter())
    }

    const incrementvalue =()=>{
        dispatch(incrementfive())
    }
    const decrementvalue =()=>{
        dispatch(decrementfive())
    }

    return(
        <div>
 <h1>  Redux Component  </h1>
 <h1> Count {countvalue}</h1>
<button onClick={increment}> Increment </button>
<button onClick={decrement}> Decrement </button>
 <hr/>
<h1>  Redux Component  5  </h1>
<h1> Count : {usercount}</h1>
<button onClick={incrementvalue}> Increment 5 </button>
<button onClick={decrementvalue}> Decrement 5 </button>


<div>
{userdata.map((e)=>(
    <div> 
        <li> {e}</li>
    </div>
))}

</div>
 </div>
)
}

export default Reduxcompnent;