import React from 'react'
import Conditional from './Conditional'
import Conditionalf from './Conditionalf'

function Props1(props){


    var name = "veera"

    var number  = 25

    var arr=[1,2,3,4,5,6]

    var obj ={
        name:"veera",
        age:30,
        city:"atp"
    }

    var zzz = (one) ? arr : obj.name;

    var one = true   //if true name else number

     function clickHere(){
        props.fun()
     }


     function clickHere1(){
         props.abc1(10,20)
     }

     function clickHere2(){
        props.twoo("ravi")
     } 

        return(
            <div>

                <button onClick={clickHere}> Click </button>

                <button onClick={clickHere1}> Click1 </button>

                <hr/>
                <button onClick={clickHere2}> Setname </button>

                 {/* <Conditional name1={name}/>
                <Conditional number1={number}/> 
                 <Conditional arr1={arr}/> 
                 <Conditional obj1={obj}/>  */}
               {/* <Conditional condition={one?name:number}/>  */}
                 {/* <Conditional condition1={zzz}/> 

                <Conditionalf condition1={zzz}/> */}
            </div>
        ) 
}

export default Props1;