import React,{Component, useState} from 'react';

const Todolist = () => {
    const [itemCount, setItemCount]=useState(0);
    const [items, setItems] =useState([]);
    const [enterdText, setEnterdText]= useState();
    const [strikeItem, setStrikeItem] = useState(0);
    const [strike, setStrike] = useState("");


    const textChange =(e) =>{
        setEnterdText(e.target.value); 
    }

    const addItems =(e)=>{
        setStrikeItem((preState)=>{
            return preState +1;
        });
        setItems((preState)=>{
            return [...preState, enterdText ];
        });
        setItemCount((preState)=>{
            return preState + 1;
        });   
    }
    const clickedOnStrike =(e) => {
        setStrikeItem((preState)=>{
            return preState -1;
        });
        e.target.className = "is-done";
    }
    const itemList =()=> {
        return(
            <ul>
                {items.map((item)=>{
                    return <li className={strike} onClick={(e)=> clickedOnStrike(e)}> {item} </li>
                })}
            </ul>
        )
    }

    return(
        <div>
           <input type="text" onChange={(e)=> textChange(e)}/> 
           <button onClick={(e)=> addItems(e)}> Add </button>
           <div> {strikeItem} Remaining Out Of {items.length} tasks </div>
           {itemList()}

           <style>
               {`
                .is-done{
                    text-decoration : line-though;
                }
               `}
              
           </style>
        </div>
    )
}
export default Todolist;