import React from 'react'

function One(props){
    return(
        <div> 
            <h2> {props.stu1.name}</h2>
            <h2> {props.stu1.age}</h2>
            <h2> {props.stu1.marks}</h2>
        </div>
    )
}
export default One;