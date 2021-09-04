import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { Task } from './task';

export const TaskList = ({ group }) => {
  return (
    <>
      <h4 className="mt-3 mb-4">{group}</h4>
      <div className="overflow-scroll" style={{ height: "87.5vh" }}>
        <small>List Name</small>
        <ListGroup className="mb-3" >
          <Task>Task 1</Task>
        </ListGroup>
      </div>
    </>
  )
};