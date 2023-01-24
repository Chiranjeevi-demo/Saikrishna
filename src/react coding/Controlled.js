import React, {useState} from 'react'
import { ModalHeader } from 'react-bootstrap';

 function Controlled() {
    
    const [name, setName] = useState('');

    const changehandler = (e)=> {
        setName(e.target.value);
    }
    
   return (
    <div>
        <h2> {name}</h2>
            <div> 
                <input type="text" onChange={changehandler}/>
            </div>
    </div>
  )
}

export default Controlled;

