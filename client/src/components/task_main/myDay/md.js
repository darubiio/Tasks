import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import { BackBtn } from '../backbtn'

export const MyDay = () => {
  const DATE = new Date().toDateString();
  return (
    <ScaleFade initialScale={0.9} in>
      <BackBtn />
      <Heading size='lg' color='yellow.400'>Mi Día</Heading>
      <Heading as="h6" size="xs">{DATE}</Heading>      
    </ScaleFade>
  )
};