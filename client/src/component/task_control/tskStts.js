import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const TaskStates = () => {

  const taskState = [
    { icon: "bi bi-list", name: "Everything" },
    { icon: "bi bi-brightness-high", name: "My Day" },
    { icon: "bi bi-circle", name: "Pending" },
    { icon: "bi bi-check2-circle", name: "Completed" }
  ].map(task => <ListGroup.Item action><i className={task.icon + ' m-2'} ></i> {task.name}</ListGroup.Item>);

  return (
    <>
      {taskState}
    </>
  )
};