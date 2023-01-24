import React, {useState} from "react";

function Forms(){

const [userData, setUserData ] = useState({name: '', mobile: '', email: '', state:'', gender: '', message:''})

const handleName =(e) => {
    console.log("data" , e)
    setUserData((preState) => {
        return {
            ...preState,
         [e.target.name]  : e.target.value
        }
    })
}

const handleSubmitForm = (e) => {
    alert(JSON.stringify(userData, null, 3));
    e.preventdefault();
    console.log('submitform', e)
}

    return(
        <div>
            <form onSubmit={handleSubmitForm}>
                <label> Name </label>
                <input type="text" placeholder="Name" name="name" value={userData.name} onChange={handleName} />
                
                <br/>
                <label> Mobile </label>
                <input type="text" placeholder="Mobile" name="mobile" value={userData.mobile} onChange={handleName}/>
                <br/>
                <label> Email </label>
                <input type="text" placeholder="Email" name="email" value={userData.email} onChange={handleName}/>
                <br/>
               
                <label> State </label>
                <select name='state' value={userData.state} onChange={handleName} > 
                <option value='india'> India</option>
                <option value='u.s'> U.S</option>
                <option value='u.k'> U.K</option>
                <option value='aus'> AUS</option>
                </select> 
                <br/>
                <label> Gender </label>
                <input type="radio" name="gender" value="male" onChange={handleName}/> Male
                <input type="radio" name="gender" value="female" onChange={handleName}/> Female
                <br/>
                <label> Message </label>
                <textarea name="message" value={userData.message} onChange={handleName}> </textarea>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
} 

export default Forms;