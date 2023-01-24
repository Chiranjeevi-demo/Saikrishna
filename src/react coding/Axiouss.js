import React,{useState,useEffect} from 'react'

function Axiouss(){

    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((json)=>
         {fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res) => res.json())
        .then((jjson)=>{
            let finaldata = jjson.map((e,i) => {
                return {
                    ...json[i],
                    ...e
                }
            } )
             setData(finaldata)
        } )
        })

    })

    return(
        <div>
            <h1> Api Data </h1>
           {data?.map((e)=>(
                <div key={e.id}>
                     <li> {e.title}</li>
                <li> {e.body}</li>
                <hr/>
                
                </div>
            )

            )}

        </div>
    )
}

export default Axiouss;