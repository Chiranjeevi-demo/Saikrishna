import React, {useState} from 'react'

function Callback1(){

    const [name, setName]= useState("Veera")

    const [count, setCount] = useState(0)

    const [btn, setBtn] = useState(false)

    const [student, setStudent] = useState({name:"veera", age:28,  city:"atp"})

    const [arr, setArr] = useState([1,2,3,4,5])

    const [arr1, setArr1] = useState([{name:"veera", age:28,  city:"atp"},
                                      {name:"hari", age:28,  city:"atp"},
                                      {name:"raju", age:28,  city:"atp"}])

    const [obj, setObj]  = useState({isadmin:true, isuser:false, isTrainee:true}) 


    
    //2 components



    function handleClick(){
        //setName('Ravi')
        setName(function(prestate){
            return `${prestate} + ravi`
        })
    }

    function increaseClick(){
        setCount(function(prestate){
            //console.log("abcdddd=== >", prestate)
            return prestate + 1
        })
    }

    function click1(){
        setBtn((prestate)=>{
            return !prestate
           })
         }


         function clickHere3(){
             setStudent((prestate)=>{
             return{
                ...prestate, 
                name:"ravi"
            }
             }
             )
         }

         function arrayClick(){
            setArr(()=>
            [ 200]
            )
         }

      

         function updateArrayobj1(){
            var res = arr1.map((val, ind, arr) => {
                //console.log("Resss===>", val)
                 if(val.name === "veera"){
                         val.name ="ramuu"
                        return val
                 }
                 else{
                     return val
                 }   
             })
             setArr1(res)
         }

         function updateArrayobj2(){
             var res = arr1.map((val, ind, arr) =>{
                 if(val.name==="hari"){
                     val.name ="hariii"
                     return val
                 }
                 else{
                     return val
                 }
             })
             setArr1(res)
         }

         function updateArrayobj3(){
             var res = arr1.map((val, ind, arr)=>{
                 if(val.name ==="raju"){
                     val.name="Rajuuuuu"
                     return val
                 }
                 else{
                    return val
                 }
             })
             setArr1(res)
         }
        

    return(
        <div>
            <h1>{name}</h1> 
           
            <button onClick={handleClick}> click</button>

            <h1> {count}</h1>
            <button onClick={increaseClick}> Click +</button>

            <h2> 
            {(btn) && <div> Diaplay Data </div>} </h2>

            <button onClick={click1}> Click </button>


            <h2> {student.name} {student.age} {student.city}</h2>


            <button onClick={clickHere3}> Click 22 </button>
            <hr/>
            <h2> {arr}</h2>

            <button onClick={arrayClick}> Array Here</button>



            <h2> {arr1[0].name} {arr1[0].age} {arr1[0].city}   </h2>

            <button onClick={updateArrayobj1}> Arr Update1 </button>

            <h2> {arr1[1].name} {arr1[1].age} {arr1[1].city} </h2>

            <button onClick={updateArrayobj2}> Arr Update2 </button>

            <h2> {arr1[2].name} {arr1[2].age} {arr1[2].city} </h2>

            <button onClick={updateArrayobj3}> Arr Update3 </button>

            
         {/* {obj.isadmin  ? <div>ADMIN</div>  : <div> false </div>}
         { obj.isuser && <div>user</div> }
         { obj.isTrainee && <div>C</div> } */}

         {obj.isadmin  ? <div>ADMIN</div>:obj.isuser ? <div> one</div> :  <div> c</div>}

<br/>
<br/>
<br/>
<br/>
<br/>
        </div>
    )
}

export default Callback1;