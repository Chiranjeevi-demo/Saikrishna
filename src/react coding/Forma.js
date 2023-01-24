import React,{useState} from 'react';
import Formb from './Formb';

function Forma(){
    const [data, setData] = useState({ name:"", mobile: ""});

    const [ndata, setNdata] = useState("");
    
    const  handleinput=(e)=>{
      setData((prestate) => {
            return {
                ...prestate,
                [e.target.name] : e.target.value
            } 
      });
    }

    const submitform=(e)=>{
        e.preventDefault();
        setNdata(data);
    }

    return(
        <div> 
                <form onSubmit={submitform}>
                    <div>
                    <label> Name</label>
                    <input type="text" name="name" value={data.name}  onChange={handleinput}/> 
                    </div>
                    <div>
                    <label> Mobile</label>
                    <input type="text" name="mobile" value={data.mobile}  onChange={handleinput}/> 
                    </div>

                    <div>
                        <button type="submit"> Submit</button>
                    </div>
                </form>
                <Formb formdata={ndata}/>

        </div>
    )
}

export default Forma;