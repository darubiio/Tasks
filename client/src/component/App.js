import { Container, Row } from 'react-bootstrap';
import { Control } from './task_control/tskControl';
import { TaskCenter } from './task_center';
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Container fluid>
      <Router>
        <Row>
          <Control />
          <TaskCenter />
        </Row>
      </Router>
    </Container>
  );
};