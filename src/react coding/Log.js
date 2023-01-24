import React, {useState} from 'react'
function Log(){
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
        alert(JSON.stringify(logindata, null, 3));
      
    }


    return(
        <div>
                <h1> Login Form </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label> Username </label>
                        <input type="text" name="username"  value={logindata.username} onChange={handleName}/> 
                    </div>
                    <div>
                        <label> Password </label>
                        <input type="password" name="password" value={logindata.password} onChange={handleName}/> 
                    </div>
                    <div>
                       <button type="submit"> Submit</button>
                    </div>

                </form>
        </div>
    )
}
export default Log;