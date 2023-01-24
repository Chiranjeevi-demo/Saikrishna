import React, {useState} from 'react'


function List(){

    // var arr=[1,2,3,4,5,6];
  const [arr2, setArr2] = useState([{name:"veera", age:28,  city:"atp"},
  {name:"hari", age:28,  city:"atp"},
  {name:"raju", age:28,  city:"atp"}])
    


    function clickbutton(e){
 
       // console.log("Resss===> 123",e);
        var res =  arr2.filter((e)=>{
                if(e.name === "veera"){
                  e.name ="siva"
                  return e
                }
            } )       
            setArr2(res)
         }
        

    return(
        <div>
            <h1>  List </h1>
            {/* <div> 
                {
                 arr.map((element)=> <div> {element + 3}</div>)
                }
             </div> */}

                <div>
                    {arr2.map((e)=> 
                    <div>
                    <div>{e.name} </div>
                    <div>{e.age} </div>
                    <div> {e.city}</div>

                    <button  onClick={()=>{clickbutton(e)} }> Click </button>
                    <hr/>
                    </div>
                    )}
                </div>

        </div>
    )
}

export default List;

