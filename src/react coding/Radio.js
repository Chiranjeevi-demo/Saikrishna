import React,{useState} from 'react';

function Radio(){
 const [data, setdata] = useState("");
 const [bank, setBank] = useState("");

 const selecttag=(e)=>{
    setdata(e.target.value);
 }

 const bankdiv=(e)=>{
 setBank(e.target.value);
 }

    return(
        <div>
                <h1> Radio Div</h1>
                <div>
                   <input type="radio" name="cash" value="cash"  onChange={selecttag}/> cash 
                   <input type="radio" name="cash"  value="cheque" onChange={selecttag}/> Cheque
                </div>
                <div>
                   <input type="radio" name="buy"  value="buy"  onChange={bankdiv}/> buy 
                   <input type="radio" name="buy" value="sell"  onChange={bankdiv}/> sell
                </div>  <br/> 

            { (data === "cash" && bank === "buy") &&  <div> Div 1 display</div> }

            <div>
            { (data === "cheque" && bank === "sell") &&  <div> Div 2 display</div> }
            </div>

        </div>
    )
}

export default Radio;