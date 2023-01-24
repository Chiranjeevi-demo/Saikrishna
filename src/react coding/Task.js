import React,{useState,useEffect } from "react";

function Fetch(){

    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then((json) => {
            setData(json);
            console.log("result", json)
        }) 
    },[])

    function clickaaa(){
        console.log("result=====>", data)
        setData((prestate)=>{
            return [...prestate, {name:"veera"}]
            
        })
    }


    return(
        <div>
            <h1> Hi </h1>

            {/* {console.log(data[0])} */}
            <button type="button" onClick={clickaaa}> click</button>
            {console.log("data------>", data)}

           {data.map((element) =>(
                 <div>
                 {element.name}
             <hr/>
            </div>
            )
             
            )} 
        </div>
    )
}
export default Fetch;