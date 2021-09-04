import React from 'react';
import { Fade, ListGroup } from 'react-bootstrap';

export const Task = ({ children }) => {
  return (
    <Fade in appear>
    <ListGroup.Item action className="d-flex">
      <spam className="flex-grow-1">
        <i className="bi bi-circle m-1 text-primary flex-grow-1 m-2" />
        {children}
      </spam>
      <i className="bi bi-star text-danger"></i>
      </ListGroup.Item>
    </Fade>
  )
};