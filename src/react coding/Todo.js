import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Form } from 'react-bootstrap'

function Todo(){
    return(
        <div>
            <div className="bg-color">
       <Container>
       <Row className=" mt-50">
        <Col md={4}>  </Col>
        <Col md={4}> 
          <div className="card"> 
            <h3> TO DO List </h3>
            <Form.Group className="mb-3" controlId="">
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group> 
             <Form.Group className="mb-3" controlId="">
              <Form.Control type="text" placeholder="Enter Description" />
            </Form.Group>
            <input type="submit" value="Submit" />  
          </div>  
        </Col>
      </Row> 
       </Container>
    </div>
        </div>
    )
}

export default Todo;