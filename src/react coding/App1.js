import logo from './logo.svg';
import './App.css';
import One from './One';
import Two from './Two'
import React,{useState,useEffect} from 'react'
import Three from './Three';
import Props1 from './Props1';
import Props2 from './Props2';
import Props3 from './Props3';
import Fetch from './Task';
import Task2 from './Task2';
import Task from './Task';
import Callback1 from './Callback1'
import Practice from './Practice';
import Cren1 from './Cren1'
import List from './List';
import Listr from './Listr'
import Grid from './Grid'
import Grida from './Grida'
import Form from './Form';
import Login from './Login';
import Axiouss from './Axiouss';
import Axious from './Axious'
import Parentt from './Parentt'
import Parentc from './Parentc';
import Filtersearch from './Filtersearch';
import Radio from './Radio';
import Forma from './Forma';
import Ab from './Ab';
import Parenttt from './Parenttt';
import Fupdate from './Fupdate';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={''} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;











  // function tenn(){
  //   console.log("veera")
  // }
  
  // function abc(a,b){
  //   console.log(a+b)
  // }

  // const[name, setName]=useState("veera")

  // const[city, setCity]= useState("hyderabad")

  
  // function clickten(){
  //   setCity("Banglore")
  // }


  
  //   <div className="App">
  //     demo

      // <ul>  
        
      //   <li>  
      //     <Link ref={createRef} to="/">Home</Link>  
      //   </li>
      //   </ul>);

        {/* <li>  
          <Link to="/OOne">One</Link>  
        </li>
        <li>  
          <Link to="/Ttwo"> Two</Link>  
        </li>
        <li>  
          <Link to="/Tthree">Three</Link>  
        </li>
        <li>  
          <Link to="/Four"> Four </Link>  
        </li>   */}
   
     
      {/* <Fupdate/> */}
      {/* <Parenttt/> */}
      {/* <Ab/> */}
      {/* <Abcd/> */}
      {/* <Forma/> */}
      {/* <Radio/> */}
      {/* <Filtersearch/> */}
      {/* <Parentc/> */}
      {/* <Parentt/> */}
      {/* <Axious/> */}
      {/* <Axiouss/> */}
      {/* <Login/> */}
      {/* <Form/> */}
      {/* <Grida/> */}
      {/* <Grid/> */}
     {/* <Listr/> */}
      {/* <List/> */}
      {/* <Cren1></Cren1> */}
      {/* <Practice/>
       
<Callback1/> */}
      {/* <Task/> */}

    {/* <h1> {name}</h1>

    <h2> {city} </h2>

    <button onClick={clickten}> click btn</button>
 
<Props1 fun={tenn} abc1={abc}  twoo={setName}/>  */}

{/* 
<Props3/> */}
      {/* <Task2/> */}
{/*     
     <Props1/> */}
     {/* <Props2/>
     <Props3/> */}
     {/* <Fetch/> */}

     {/* <Three  name={""} bbb={z?a:b} /> */}


    {/* <h2> {stua}</h2>
    <button onClick={()=> change1()}> Click </button>
     <One  stu1={student}></One>
     <button onClick={()=> changebtn()}> Click </button>
     <Two></Two> 

     <hr/>
     <div> {one ? "Veera" : "Ramu"  }   </div>

     <div> {abcde.login ? "Veera" : "Ramu"  }   </div>


     <button onClick={()=> click1()}> Click </button>
     <hr/>
    {(one) && <div> One div </div>}

    
  // var x= "veera"

  // var z = true

  // var a = "hello react"
  // var b = "hi Hello"

  //var aaa = (z)? a : b;



  // const [stua, setStua] = useState("veera");
  // const [one, setOne] = useState(true)

  // const[ abcde,setAbcde ] = useState({
  //     login:true,
  //     isadmin:false,
  //     pasword:true,
  //    a :20,
  //    b:"20"  
  // })

  // function change1(){
  //   setStua("Ravi")
  // }

  // function click1(){
  //   setOne((prestate)=>{
  //     return !prestate
  //   })
  // }

  // function change1(){
  //   setStua((prestate)=>{
  //     return "Ravi"
  //   })
  // }

  // const [student, setStudent] = useState({name:"veera", age:28})
  
  
  // function changebtn(){
  //   setStudent({name:"Ravi", age : student.age + 3  })
  // }

  // function changebtn(){
  //   setStudent((prestate) =>{
  //     return  {
  //       ...prestate,
  //       age:student.age+2
  //     }
  //   })
  // }
    <hr/> */}


    // </div>
  // );



//(a<b)? true : false




// var lol = 'hyderaa'
// const obje = {};
// for (let char of lol) {
//     if(obje[char]) {
//         obje[char]++;
//     } else {
//         obje[char] = 1
//     }
// }
// console.log(obje);

=====================
import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {InputField,CheckBoxList,Button,Dropdown} from "./CustomFields"

const temp_data = ["one", "two", "three", "four", "five"]

function App() {
    const [checkListdata, setChecklistdata] = useState(temp_data);
    const [selectedChecklist, setSelectedlist] = useState([]);
    const [listitems, setlistitems] = useState(temp_data);
    const [dropVal, setdropVal] = useState("")

    const [inVal, setinVal] = useState("");

    const InputOnChangeHandler=(e)=>{
      let val = e.target.value;
      if(val !== undefined){
        setinVal(e.target.value)
      }
    }
    const checkBoxlisthandler=(val)=>{
      console.log(val)
      setSelectedlist(val)
    }
    const buttonClickHandler=(e)=>{
      console.log(e)
    }
    const dropDownChangeHandler=(e)=>{
      console.log(e)
      let val = e.target.value;
      if(val){
        setdropVal(e.target.value)
      }
    }
    
    return (<div className="mainContainer">
      <InputField value={inVal} onChange={(e)=>InputOnChangeHandler(e)} placeholder="Search"/>
      <CheckBoxList data={checkListdata} values={selectedChecklist} onChange={(val)=> checkBoxlisthandler(val)} />
      <Button lable={"click me"} onClick={(e)=> buttonClickHandler(e)}/>
      <Dropdown value={dropVal} data={listitems} onChange={(e)=> dropDownChangeHandler(e)}/>
      </div>
    );
  
}

export default App;


