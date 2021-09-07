import React from 'react';
import { Container } from "@chakra-ui/react";
import { TaskMenu } from './components/task_menu/taskMenu';

export const App = () => {
  return (
    <Container maxW="container.2xl">
      <TaskMenu/>
    </Container>
  )
};