import React from 'react'
import { Col } from 'react-bootstrap';
import { AddButton } from '../../globals/addButton';
import { TaskList } from '../listTask';

export const Planned = () => {
  return (
    <Col className="border" sm={9} style={{ height: "100vh" }}>
      <TaskList group="Planned" />
      <AddButton />
    </Col>
  )
};