import React,{useState} from 'react'

function Task2(){

    const [data, setData] = useState({});

    const one = [{
        id:"1",
        name:"Veera",
        age:30
    },
    {
        "id":"2",
        name:"Veera",
        age:40
    },
    {
        "id":"3",
        name:"Veera",
        age:50
    }
]

    function btnOne(){
       var res = one.find((val, ind, arr) => {
            if(val.id === "1"){
                return true
            }
        })
        setData(res)
    }


    function btnTwo(){
        var res = one.find((val, ind, arr) => {
            if(val.id === "2"){
                return true
            }
        })
        setData(res)
    }
    function btnThree(){
        var res = one.find((val, ind, arr) => {
            if(val.id === "3"){
                return true
            }
        })
        setData(res)
    }
    
            return(
                <div>
                    <h2> Buttons</h2>
                    <h2> {data.id}  {data.name}  {data.age}</h2>

                    <button  onClick={btnOne}> Button 1</button>
                    <button onClick={btnTwo}> Button 2</button>
                    <button onClick={btnThree}> Button 3</button>
                    
                </div>
            )  
}

export default Task2;

// import React,{useState} from 'react';

// function List() {
//   const [isValid,setIsValid]=useState(false);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//     <img src= {isValid? "https://cdn.iconscout.com/icon/premium/png-256-thumb/mountain-1628875-1382208.png":"https://cdn.iconscout.com/icon/free/png-256/car-automobile-vehicle-personal-family-transportation-emoj-symbol-30709.png"} alt="this is my image" width="100px" height="100px"/>
    
    
//   <button onClick={()=>{setIsValid(true)}}> click</button>
//   {/* <img src=  alt="this is my image" width="100px" height="100px"/> */}
//     </div>
//   );
// }

// export default List;