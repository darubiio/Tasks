import React from 'react';
import { Grid } from '@chakra-ui/layout';
import { Container } from "@chakra-ui/react";
import { TaskMenu } from './components/task_menu/taskMenu';
import { TaskMain } from './components/task_main/taskMain';
import { AddInput } from './components/forms/add_input/addInput';

export const App = () => {
  return (
    <Container maxW="container.2xl">
      <Grid h='100vh' templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={6}>
        <TaskMenu />
        <TaskMain />
        <AddInput />
      </Grid>
    </Container>
  )
};