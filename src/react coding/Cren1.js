import React, {useState} from 'react'
import Cone from './Cone'
import Cthree from './Cthree';
import Ctwo from './Ctwo';


function Cren1(){
    const [obj, setObj]  = useState({isadmin:false, isuser:true, isTrainee:true})

    function handleclick(){
        setObj((prestate)=>{
           return {...prestate,
            isadmin:true
           }
        })
    }

    return(
        <div>
        {/* {obj.isadmin  ? <Cone/>  : <div> false </div>}
         { obj.isuser ? <Ctwo/> : <div> false </div> }
         { obj.isTrainee ? <Cthree/>: <div> false </div> } */}


         {/* {obj.isadmin && <Cone/> }

         {obj.isuser && <Ctwo/>}

         {obj.isTrainee && <Ctwo/> } */}

{obj.isadmin  ? <Cone/> : obj.isuser ? <Ctwo/> :  <Cthree/>}

<button onClick={handleclick}> Click </button>

{/* {obj.isadmin  ? <Cone/> : <Ctwo/> } */}




        </div>
    )
}

export default Cren1;