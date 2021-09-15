import React from 'react';
import { Grid } from '@chakra-ui/layout';
import { Container } from "@chakra-ui/react";
import { TaskMenu } from './components/task_menu/taskMenu';
import { TaskMain } from './components/task_main/taskMain';

export const App = () => {
  return (
    <Container maxW="container.2xl">
      <Grid templateColumns="repeat(6, 1fr)" gap={12}>
        <TaskMenu />
        <TaskMain />
      </Grid>
    </Container>
  )
};