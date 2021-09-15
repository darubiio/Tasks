import React from 'react';
import { MyDay } from '../myDay/md';
import { ScaleFade } from '@chakra-ui/transition';
import { Box } from '@chakra-ui/layout';

export const Main = () => {
  return (
    <Box display={['none', 'revert']}>
      <ScaleFade initialScale={0.9} in>
        <MyDay />
      </ScaleFade>
    </Box>
  )
};