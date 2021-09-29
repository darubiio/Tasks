import React from 'react';
import { Box, GridItem, Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import { BackBtn } from '../backbtn'

export const MyDay = () => {
  const DATE = new Date().toDateString();
  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh'>
          <BackBtn />
          <Heading size='lg' color='yellow.400'>Mi Día</Heading>
          <Heading as="h6" size="xs">{DATE}</Heading>
        </Box>
      </ScaleFade>
    </GridItem>
  )
};