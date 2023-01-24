import React, {useState, useEffect} from "react";
import Axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import UseEffect from "./UseEffect";

function Axiosform(props){
 //console.log('props ---', props)
const [userData, setUserData ] = useState({name: '', age: '', marks: ''})


useEffect(()=>{
    setUserData({
        name : props.edit.name ? props.edit.name : '',
        age : props.edit.age ? props.edit.age : '',
        marks : props.edit.marks ? props.edit.marks : '',
    })
},[props.edit])

const handleName =(e) => {
   // console.log("data" , e)
    setUserData((preState) => {
        return {
            ...preState,
         [e.target.name]  : e.target.value
        }
    })
}

const handleSubmitForm = (e) => {
    //alert(JSON.stringify(userData, null, 3));
    e.preventDefault();
    if(!props.edit.isEdit){
    Axios.post('http://localhost:3000/userdata', {id : uuidv4(), ...userData })
    .then(res =>console.log('users data ==> ', res) )
    console.log('submitform', userData)
    }
    else{
        const url = `http://localhost:3000/userdata/${props.edit.id}`
        Axios.put(url, userData)
        .then(res => console.log('updated date==> ', res) )
    }
    }

    return(
        <div>
            <form onSubmit={handleSubmitForm}>
                <label> Name </label>
                <input type="text" placeholder="Name" name="name" value={userData.name} onChange={handleName} />
                
                <br/>
                <label> Mobile </label>
                <input type="text" placeholder="Age" name="age" value={userData.age} onChange={handleName}/>
                <br/>
                <label> Email </label>
                <input type="text" placeholder="Marks" name="marks" value={userData.marks} onChange={handleName}/>
                <br/>
               
                <button type="submit">Submit</button>
            </form>
        </div>
    )
} 

export default Axiosform;