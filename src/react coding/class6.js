import React from 'react'

class Classupdate extends React.Component{
    constructor(){
        super()
        this.state = {
          text : 'Please Subscribe'
        }
    }

    changeText(){
        this.setState({
            text: 'Thank You For Subscribe'
        })
    }
    render(){
        return(
            <div>
                <h1> {this.state.text} </h1>
                <button onClick={() => this.changeText()}> Subscribe Here </button>
            </div>
        )
    }
}
export default Classupdate;
====

function state and update

function Fupdate(){
        const [name, setName] = useState("veera")
        function changetext(){
            setName("Ravi")
        } 
        return(
            <div>
                    <h1> {name}</h1
                    <button onClick={changetext}> Click </button>
            </div>
        )
    }

   // props parentimport 
    React,{useState}  from "react";
import Fchild from "./Fchild";

function Fupdate(props){
    return(
            <div> 
                <h1> Data pass Child Component</h1>
            <Fchild name={"Anantapur"}/>
            </div>
    )
}
export default Fupdate;

//props child

import React,{useState}  from "react";
function Fchild(props){
    return(
            <div> 
                <p> We Receive Parent Data</p>
                    <h2> {props.name}</h2>
            </div>
    )
}
export default Fchild;

import React,{useState}  from "react";
import Fchild from "./Fchild";
function Fupdate(props){
    const [name, setName] = useState("Hyderabad")
    return(
            <div> 
               <h1> {name}</h1>
            <Fchild onChange={(name)=> setName(name)}/>
            </div>
    )
}
export default Fupdate;
import React,{useState}  from "react";
function Fchild(props){
    return(
            <div> 
                <p> We Receive Parent Data</p>
                <button onClick={() => props.onChange("Banglore") }> Click </button>
            </div>
    )
}
export default Fchild;
