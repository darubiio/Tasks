import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

export const AllTasks = () => {

  return (
    <Col className="border" sm={9} style={{ height: "100vh" }}>

      <h4 className="mt-3">All tasks</h4>
      <small>List Name</small>

      <ListGroup className="overflow-scroll mt-3" style={{ height: "60vh" }}>
        <ListGroup.Item action>
          <i className="bi bi-circle m-1"></i> Task 1
        </ListGroup.Item>
      </ListGroup>
      
    </Col>
  )
};