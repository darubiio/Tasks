import React from 'react';
import { Task } from '../task';
import { BackBtn } from '../backbtn';
import { useQuery } from '@apollo/client';
import { ALL_TASKS } from '../../../fetching/query';
import { ScaleFade, Box, GridItem, Heading, Stack, Text } from '@chakra-ui/react';

export const All = () => {
  const { loading, error, data } = useQuery(ALL_TASKS);
  
  const TaskList = data ? data.lists.map(list =>
    <Box key={list._id}>
      <Text mt={2} ml={2} fontSize='sm'>{list.name}</Text>
      <Stack >
        {list.tasks.map(task =>
          <Task key={task.name} id={task._id} name={task.name} />
        )}
      </Stack>
    </Box>
  ) : '';

  return (
    loading ? '' :
      error ? `Error : ( ${error.message}` :
        <GridItem p={[1, 5]} colSpan={[5, 4]}>
          <ScaleFade initialScale={0.9} in>
            <Box h='88vh' overflow='scroll'>
              <BackBtn />
              <Heading size='lg' color='orange.500'>Todo</Heading>
              {TaskList}
            </Box>
          </ScaleFade>
        </GridItem>
  )
};