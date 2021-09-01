import { Container, Row } from 'react-bootstrap';
import { Control } from './task_control/ctrl';
import { TaskCenter } from './task_center/taskCenter'

export const App = () => {
  return (
    <Container fluid>
      <Row>
        <Control />
        <TaskCenter />
      </Row>
    </Container>
  );
};