import React,{useState, useEffect} from 'react'

 function Demo() {

     const [data , setData] =useState([])

     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then((json) => setData(json))
     })


  return (
    <div>
        <h1> Demo </h1>

        {data.map((e)=>(
            <div className="box-demo"> 
                <div> {e.userId}</div>
                <div> {e.id}</div>
                <div> {e.title}</div>
                <div> {e.body}</div>
                
            </div>
        ))}



    </div>
  )

  }
  export default Demo;
