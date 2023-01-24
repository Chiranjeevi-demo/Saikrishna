
// props 
function Parentt(){
    return(
        <div>
            <Parentc name={"veera"} email={"veera@gmail.com"} /> 
        </div>
    )
}
export default Parentt;

function Parentc(props){
    return(
        <div> 
           <h1> {props.name}</h1>
           <h1> {props.email}</h1>
        </div>
    )
}
export default Parentc;

//callback 
function Parentt(){
    const [val, setVal] = useState("initial value")
    return(
        <div>
            <div> {val}</div>
            <Parentc onChange={(value)=> setVal(value)} />  
        </div>
    )
}
export default Parentt;
function Parentc(props){
    return(
        <div> 
          <button onClick={() => props.onChange("Updated Value") }> Click </button>
        </div>       
    )
}
export default Parentc;

