import React,{useState} from 'react'
import Conditionalf from './Conditionalf';

function Props2(){
    // const [name, setName] =useState("name");
    //const [number, setNumber] =useState(20);
    //const [arr, setArr] =useState([1,2,3,4,5,6,7]);
    const [obj, setObj] = useState({name:"veera", age:30, city:"atp"})

   return(
       <div> 
           <Conditionalf obj1={obj.name}/>
       </div>
   )
}

export default Props2;