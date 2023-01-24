import React,{useState} from 'react'

function Practice(){
    const [name, setName]= useState('veera')
    const [student, setStudent] = useState({name:"ravi", age:30, city:"atp"})


    function handleClick(){
        setName(function(e){
            return `${e} + rani`
        })
    }

    function studentabc(){
        setStudent((e)=>{
            return{
                ...e,
                name:"aaa"
            }
        })
    }

    return(
        <div>
            <h2>{name}</h2> 
            <button onClick={handleClick}> Click 1</button>
            <hr/>
            <h2> {student.name}</h2>
            <button onClick={studentabc}> click 2</button>

        </div>
    )
}
export default Practice;