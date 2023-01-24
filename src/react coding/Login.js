import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Login(){
    
    const redirect = useNavigate();

    const [logindata, setLogindata] = useState({username:"", password:""});

    const handleName=(e)=>{
        setLogindata((pervstate)=>{
            return {
                ...pervstate,
                [e.target.name]  : e.target.value
            }
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(logindata.username !== "veera") {
            alert("please Enter Correct username")
        }
        else if(logindata.password !=="veera@12"){
            alert("please Enter Correct Password")
        }
        else{
            redirect('/Page1')
           // alert(JSON.stringify(logindata, null, 3))
        }



        // if(logindata.username === "veera" && logindata.password ==="veera@12"){
        //     alert(JSON.stringify(logindata, null, 3));
        // }else{
        //     alert("please Enter Correct Username & password")
        // }
      
    }


    return(
        <div>
                <h1> Login Form </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label> Username </label>
                        <input type="text" name="username" required value={logindata.username} onChange={handleName}/> 
                    </div>
                    <div>
                        <label> Password </label>
                        <input type="password" name="password" required value={logindata.password} onChange={handleName}/> 
                    </div>
                    <div>
                       <button type="submit"> Submit</button>
                    </div>
                </form>
        </div>
    )
}
export default Login;