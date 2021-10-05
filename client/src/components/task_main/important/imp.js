import { useQuery } from '@apollo/client';
import { Box, GridItem, Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { BackBtn } from '../backbtn';
import { IMPORTANTS } from '../../../fetching/query';
import { Tasksl } from '../task/tasks';

export const Important = () => {
  const { loading, error, data } = useQuery(IMPORTANTS);

  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color='red.400'>Importante</Heading>
          <Tasksl imptt data={data} error={error} loading={loading} />
        </Box>
      </ScaleFade>
    </GridItem>
  )
};