import { Box, Center, Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import taskMan from '../../../image/taskman.svg';
import React from 'react';

export const Main = () => {
  return (
    <ScaleFade initialScale={0.9} in>
      <Box display={['none', 'revert']}>
        <Heading size='lg' color='teal.600'>Bienvenido !</Heading>
        <Center h='95vh'>
          <img src={taskMan} alt='taskman' />
        </Center>
      </Box>
    </ScaleFade>
  )
};