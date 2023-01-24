import React,{useState} from 'react';

function Filtersearch(){

    const list =  ["apple", "banana", "orange", "mango", "carrot"]
 const [data, setData] = useState(list);
    
 const handelsearch = (e) => {
    let search = e.target.value.toLowerCase();
    setData(list.filter((x)=> x.toLowerCase().includes(search)));
   // setData(list.filter((x)=> x.toLowerCase().startsWith(search)));
 };

    return(
        <div>
                <h1> Filter</h1>
                <div>
                    <input type="text" onChange={handelsearch}/>

                    {data.map((x)=>(
                        <div> {x}</div> 
                    ))}
                </div>


                {/* <div>
                    <select> 
                        <option> Select </option>
                        <option value="apple"> Apple </option>
                        <option value="banana"> Banana </option>
                        <option value="orange"> orange </option>
                        <option value="mango"> mango </option>
                        <option value="carrot"> carrot </option>
                    </select>
                </div> */}
        </div>
    )
}

export default Filtersearch;