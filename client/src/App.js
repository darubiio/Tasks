import React from 'react';
import { Container, Grid } from "@chakra-ui/react";
import { TaskMenu } from './components/task_menu/taskMenu';
import { TaskMain } from './components/task_main/taskMain';
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Container maxW="container.2xl">
      <Grid templateColumns="repeat(7, 1fr)" gap={12}>
        <Router>
          <TaskMenu />
          <TaskMain />
        </Router>
      </Grid>
    </Container>
  )
};