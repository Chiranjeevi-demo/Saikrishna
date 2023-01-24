import React, {useState, useEffect} from 'react'

function Grid(){

     const [students, setStudents] = useState([
     {id:1, name:"veera", age:28,  city:"atp"},
     {id:2, name:"hari", age:28,  city:"atp"},
     {id:3, name:"raju", age:28,  city:"atp"},
     {id:4, name:"veera", age:28,  city:"atp"},
     {id:5, name:"hari", age:28,  city:"atp"},
     {id:6, name:"raju", age:28,  city:"atp"},
     {id:7, name:"veera", age:28,  city:"atp"},
     {id:8, name:"hari", age:28,  city:"atp"},
     {id:9, name:"raju", age:28,  city:"atp"},
     {id:10, name:"veera", age:28,  city:"atp"},
     {id:11, name:"hari", age:28,  city:"atp"},
     {id:12, name:"raju", age:28,  city:"atp"}
    ]);
    
//  function deletehandler(id){
//     var res=students.filter((e) => {
//         if(e.id !== id){
//             return true;
//         }
//     })
//     setStudents(res)
//  }

function deletehandler(e){
    let indd = students.findIndex(x=> {
        if(e === x.id){
           return true
        }
    })
    let studentsdataa= [...students]
    studentsdataa.splice(indd,1)
    setStudents(studentsdataa)
}


 function editClick(e){
     let data={...e,age:e.age+10}
     let ind = students.findIndex(x=> {
         if(e.id === x.id){
            return true
         }
     })
     let studentsdata= [...students]
     studentsdata.splice(ind,1,data)
     setStudents(studentsdata)
 } 

    return(
        <div>
                <h1> Grid Boxes</h1>
                <div class="">
                    <div class="d-flexwrap">
                    {students.map((e)=>{
                        return <div class="grid-1">  
                            <div> {e.name}</div>
                            <div> {e.age}</div>
                            <div> {e.city}</div>
                            <button onClick={()=> editClick(e)}> Edit </button> 
                            <button onClick={()=> deletehandler(e.id)}> Delete </button>
                        </div>
                    })}
                    </div>
                </div>
        </div>
    )
}
export default Grid;