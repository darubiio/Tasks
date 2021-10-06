import React from 'react';
// import { Task } from '../task';
import { BackBtn } from '../backbtn';
import { useQuery } from '@apollo/client';
import { ALL_TASKS } from '../../../fetching/query';
import { ScaleFade, Box, GridItem, Heading } from '@chakra-ui/react';
import { Taskslists } from '../task/taskslists';

export const All = () => {
  const { loading, error, data } = useQuery(ALL_TASKS);
            
  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color='orange.500'>Todo</Heading>
          <Taskslists state='tasks' loading={loading} error={error} data={data}/>
        </Box>
      </ScaleFade>
    </GridItem>
  )
};