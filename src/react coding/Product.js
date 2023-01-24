import React,{useState, useEffect} from 'react'
import { Row, Col, Table, Button, Container } from 'react-bootstrap';
import Productbtn from './Productbtn';



 function Product() {
 
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/data')
        .then((res)=> res.json())
        .then((json)=> setData(json))
    })

  return (
    <div>
        <Row>
        {data.map((e)=>(
              <Col xs={3}>
            <div className="text-center grid-1"> 
            <div> <img className="product-img" src={e.imageUrl}/> </div>
            <div> {e.title}</div> 
            <div> {e.category}</div>
            <div> <h3>&#8377; {e.price} </h3> </div> 
           <Productbtn/>
            </div>
            </Col>
        ))}
        </Row>
       

    </div>
  )
}

export default Product;


