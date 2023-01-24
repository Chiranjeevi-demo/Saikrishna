import React from 'react'
import {Row, Col} from 'react-bootstrap'
import img1 from './images/img.jpg'


 function Page1() {
  return (
    <div className="container">

       <Row>
        <Col md={4}>   
        <div className="form-1">
<h3 className="text-center"> Bus Booking </h3>
<form>
  <div className="form-btm">
  <label> From </label> <br/>
<input type="text" className="form-control"/>
  </div>
  <div className="form-btm">
  <label> To </label> <br/>
<input type="text" className="form-control"/>
  </div>
  <div className="form-btm">
  <label> Journey Date </label> <br/>
<input type="date" className="form-control"/>
  </div>

  <div className="mt-3 text-center ">
    <button className="btn btn-success btn-block"> Submit </button>
  </div>
 
</form>
        </div>
         </Col>
        <Col md={8}>  
        <img className="img-banner" src={img1} />
         </Col>
       
        </Row> 

    </div>
  )
}

export default Page1;
