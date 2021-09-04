import React from 'react';
import { Col } from 'react-bootstrap';
import { TaskList } from '../listTask';
import { AddButton } from '../../globals/addButton';

export const Completed = () => {
  return (
    <Col className="border" sm={9} style={{ height: "100vh" }}>
      <TaskList group="Completed" />
      <AddButton />
    </Col>
  )
};