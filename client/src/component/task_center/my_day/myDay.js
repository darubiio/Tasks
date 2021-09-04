import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { Task } from '../task';
import { AddButton } from '../../globals/addButton';

export const MyDay = () => {
  const today = new Date().toDateString();

  return (
    <Col className="border" sm={9} style={{ height: "100vh" }}>

      <h4 className="mt-3">My Day</h4>
      <small className="text-warning"><b>{today}</b></small>
      <div className="overflow-scroll mt-3" style={{ height: "85vh" }}>
        <ListGroup className="mb-3" >
          <Task>Task 1</Task>
        </ListGroup>
      </div>
      
      <AddButton />
    </Col>
  )
};