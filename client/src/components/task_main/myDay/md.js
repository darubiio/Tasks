import { Box, Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import React from 'react';

export const MyDay = () => {

  const DATE = new Date().toDateString();

  return (
    <Box>
      <Heading size='lg' color='yellow.400'>Mi Día</Heading>
      <Text fontSize='xs' >{DATE}</Text>      
    </Box>
  )
}