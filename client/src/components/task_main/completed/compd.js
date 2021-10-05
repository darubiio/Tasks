import { useQuery } from '@apollo/client';
import { Box, GridItem, Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { BackBtn } from '../backbtn';
import { COMPLETED } from '../../../fetching/query';
import { Tasksl } from '../task/tasksl';

export const Completed = () => {
  const { loading, error, data } = useQuery(COMPLETED);

  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color='cyan.700'>Completado</Heading>
          <Tasksl state='tasksCompleted' data={data} error={error} loading={loading} />
        </Box>
      </ScaleFade>
    </GridItem>
  )
};