import React from 'react';
import { MyDay } from '../myDay/md';
import { Box } from '@chakra-ui/layout';

export const Main = () => {
  return (
    <Box display={['none', 'revert']}>
      <MyDay />
    </Box>
  )
};