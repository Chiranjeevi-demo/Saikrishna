import React,{useState, useEffect} from 'react'
import Axios from 'axios';

 function Axious() {
 const [data, setData] = useState([])

 useEffect(()=>{
    Axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> setData(res.data));
 })

  return (
    <div>
        {data.map((x)=>(
            <div> 
                <p> {x.title}</p>
            </div>
        ))}
  </div>
  )
}

export default Axious;






// import React,{useState,useEffect} from 'react'

// function Axiouss(){

//     const [data, setData] = useState([])

//     useEffect(()=> {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response)=> response.json())
//         .then((json)=> setData(json) )
//     })

//     return(
//         <div>
//             <h1> Api Data </h1>
//            {
//             data.filter((e)=>{
//                 if(e.id%2 !==0){
//                     return true
//                 }
//             }).map((e)=>(
//                 <div> {e.id}, {e.title} </div>
//             )) 
//            }

//         </div>
//     )
// }

// export default Axiouss;

// // optimization
// //usememo, usecallback, React.memo, React.purecomponent, Rreeact.fragment