import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const TaskStates = () => {

  const taskState = [
    { icon: "bi bi-house", name: "Tasks", style: "text-dark", link: "/" },
    { icon: "bi bi-brightness-high", name: "My Day", style: "text-warning", link: "/myday" },
    { icon: "bi bi-check2-circle", name: "Completed", style: "text-primary", link: "/comp" },
    { icon: "bi bi-star", name: "Important", style: "text-danger", link: "/imp" },
    { icon: "bi bi bi-calendar-event", name: "Planned", style: "text-success", link: "/planned" }
  ].map(task =>
    <Link className="text-body text-decoration-none" to={task.link}>
    <ListGroup.Item action>
      <i className={task.icon + ' ml-2 ' + task.style} ></i>
      <span className="m-3">{task.name}</span>
    </ListGroup.Item>
    </Link>
  );

  return (
    <>
      {taskState}
    </>
  )
};