import React,{useEffect} from 'react';

let rendercount = 0;

 function Usememochild() {
useEffect(()=>{
    rendercount ++
})
  return (
    <div>
    rendercount : {rendercount}
    </div>
  )
}
export default Usememochild;