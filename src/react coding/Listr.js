import React from 'react'

function Listr(){

    let list =[{
        name:"veera",
        city:"ATP",
        marks:300
    },
    {
        name:"suresh",
        city:"hyd",
        marks:350
    },
    {
        name:"ravi",
        city:"hyd",
        marks:350
    },
    {
        name:"siva",
        city:"bng",
        marks:400
    }]

    return(
        <div>
            <h1> Hii</h1>
            {list.map((e,index)=>{
                return<div key={e.name}>
                    <table border="1" style={{width:"50%"}}>
                        <tr> 
                        <td> {index +1 } </td>
                            <td> {e.name} </td>
                            <td> {e.city}</td>
                            <td>{e.marks} </td>
                        </tr>    
                    </table> 
                {/* <li> {e.name}</li>
                <li> {e.city}</li>
                <li> {e.marks}</li> */}
                </div>
            })}
        </div>
    )
}
export default Listr;