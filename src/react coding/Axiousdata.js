import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Axiosform from './Axiosform';

function Axiousdata(){

    const [users, setUsers] = useState(null);
    const [userEdit, setUserEdit] = useState(null);

    useEffect(()=>{
        Axios.get('http://localhost:3000/userdata')
        .then(res => {
            console.log('users Data ==>', res.data)
            setUsers(res.data)
        }) 
    },[]) 

    const deleteRecord = (x)=> {
        const url = `http://localhost:3000/userdata/${x.id}`
        console.log('deletefromurl ==>', url)
        Axios.delete(url);
    } 

    const editRecord=(userData)=>{
        console.log('userData --->' , userData)
        setUserEdit(userData)
    }

    return(
        <div>
          {users?.map (x => {
              return<React.Fragment key={x.id}>
                  <div> {x.name }</div>
                  <div> {x.age }</div>
                  <div> {x.marks }</div>
                   <button type="button" onClick={() =>deleteRecord(x)}> Delete </button>
                  <button type="button" onClick={() =>editRecord(x)}> Edit </button>
                  <hr/>
               </React.Fragment>
          })}

        <Axiosform edit={userEdit ? userEdit : ''}/>
        </div>
    )
}
export default Axiousdata;