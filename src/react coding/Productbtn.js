import React,{useState} from 'react'
import { Row, Col, Table, Button, Container } from 'react-bootstrap';

 function Productbtn() {

    const [addToCartButton, setAddToCartButton] = useState(true);

    const [count, setCount] = useState(0)

    function addtoCartButtonfale(){
        setAddToCartButton(false)
    }

    const increment = () => {
        setCount((prestate)=>{
           return prestate +1 
        })
    }

    const decrement = () => {
        setCount((prestate)=>{
            return  prestate-1 
        })
    } 


  return (
    <div>
        { addToCartButton ? 
        <Button  onClick={addtoCartButtonfale} className="btn btn-success btn-block" > Add To Cart </Button> :

        <Row>
        <Col xs={3}><button onClick={decrement} className="btn btn-success btn-block"> - </button> </Col>
        <Col xs={6}>  {count} </Col>
        <Col xs={3}><button onClick={increment} className="btn btn-success btn-block"> + </button> </Col>
        </Row>
    
    }

       
    </div>
  )
}

export default Productbtn;
