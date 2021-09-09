import { Box } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import { MyDay } from '../myDay/md'
import React from 'react';

export const Main = () => {
  return (
    <Box display={['none', 'revert']} >
      <ScaleFade initialScale={0.9} in>
        <MyDay />
      </ScaleFade>
    </Box>    
  )
};