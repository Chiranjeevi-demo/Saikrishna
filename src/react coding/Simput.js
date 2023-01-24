import React,{useState, useEffect} from 'react'

export default function Simput() {

    const [name, setName] = useState('');

    const changehandler = (e)=> {
        setName(e.target.value);
    }

  return (
    <div>
            <div> 
                <input type="text" onChange={changehandler}/>
            </div>
        <div>
        
        <input type="text" value={name} /> 
        </div>
       


    </div>
  )
}
