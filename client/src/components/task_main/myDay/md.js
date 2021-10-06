import React from 'react';
import { BackBtn } from '../backbtn';
import { Tasksl } from '../task/tasksl';
import { useQuery } from '@apollo/client';
import { MY_DAY } from '../../../fetching/query';
import { ScaleFade } from '@chakra-ui/transition';
import { Box, GridItem, Heading } from '@chakra-ui/layout';


export const MyDay = () => {
  const { loading, error, data } = useQuery(MY_DAY);

  const DATE = new Date().toDateString();
  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh'>
          <BackBtn />
          <Heading size='lg' color='yellow.400'>Mi Día</Heading>
          <Heading as="h6" size="xs">{DATE}</Heading>
          <Tasksl state='tasksMyDay' data={data} error={error} loading={loading} />
        </Box>
      </ScaleFade>
    </GridItem>
  )
};