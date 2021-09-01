import React from 'react';
import { NewLBttn } from './nlButtn';
import { TaskStates } from './tskStts';
import { Col, ListGroup, InputGroup, FormControl, Fade } from 'react-bootstrap';

export const Control = () => {
  return (
      <Fade in appear>
        <Col sm={3} style={{ height: "100vh" }} className="border">
        
          <h4 className="text-primary mt-3">USERNAME</h4>
          <small>Task application</small>
          <ListGroup className="mt-3 d-flex" style={{ height: "89vh" }}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Search" />
            </InputGroup>
            <TaskStates />
            <hr />
            <ListGroup className="overflow-scroll" style={{ height: "60vh" }}>
              <ListGroup.Item action><i class="bi bi-list-ul m-2"></i> New list 1</ListGroup.Item>
            </ListGroup>
            <NewLBttn/>
          </ListGroup>
          
        </Col>
      </Fade>
  )
};