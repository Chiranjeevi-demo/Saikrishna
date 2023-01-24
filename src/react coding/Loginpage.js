import React,{useState} from 'react'

export default function Loginpage() {

    const [data, setData]= useState({name:"", password:""})

    const formdata =(e)=>{
        setData((prestate)=>{
            return{
                ...prestate,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitform=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(data))
    }


  return (
    <div>

        <form onSubmit={submitform}> 
            <div> 
                <label> Username</label>
                <input type="text" name="name" value={data.name} onChange={formdata}/>
            </div>

            <div> 
                <label> Password</label>
                <input type="Password" name="password" value={data.password} onChange={formdata} />
            </div>

            { (data.name && data.password) && <div> 
               <button type="submit"> Submit </button>
            </div>}

            </form>
    </div>
  )
}
