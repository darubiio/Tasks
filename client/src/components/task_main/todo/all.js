import React from 'react';
import { Task } from '../task';
import { BackBtn } from '../backbtn';
import { gql, useQuery } from '@apollo/client';
import { ScaleFade } from '@chakra-ui/transition';
import { GridItem, Heading, Stack, Text } from '@chakra-ui/layout';

const ALL = gql`
 query LISTAS {
  lists {
    _id
    name
    tasks {
      _id
      name
    }
  }
  }
`
export const All = () => {
  const { loading, error, data } = useQuery(ALL);
  
  const TaskList = data ? data.lists.map(list =>
    <>
      <Text mt={2} ml={2} fontSize='sm'>{list.name}</Text>
      <Stack >
        {list.tasks.map(task =>
          <Task name={task.name} />
        )}
      </Stack>
    </>
  ) : '';

  return (
    loading ? '' :
      error ? `Error : ( ${error.message}` :
        <GridItem p={5} colSpan={5}>
          <ScaleFade initialScale={0.9} in>
            <BackBtn />
            <Heading size='lg' color='orange.500'>Todo</Heading>
            {TaskList}
          </ScaleFade>
        </GridItem>
  )
};