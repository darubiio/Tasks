import React from 'react';
import { Box, GridItem, Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import { TASKS } from '../../../fetching/query';
import { Tasksl } from '../task/tasksl';
import { useQuery } from '@apollo/client';
import { BackBtn } from '../backbtn';

export const Tasks = () => {
  const { loading, error, data } = useQuery(TASKS);

  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color='orange.800'>Tareas</Heading>
          <Tasksl state='tasks' data={data} error={error} loading={loading} />
        </Box>
      </ScaleFade>
    </GridItem>
  )
};