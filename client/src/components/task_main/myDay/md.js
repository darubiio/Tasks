import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import { ScaleFade } from '@chakra-ui/transition';
import { BackBtn } from '../backbtn'
import React from 'react';

export const MyDay = () => {
  const DATE = new Date().toDateString();
  return (
    <ScaleFade initialScale={0.9} in>
      <BackBtn />
      <Heading size='lg' color='yellow.400'>Mi Día</Heading>
      <Text fontSize='xs' >{DATE}</Text>
    </ScaleFade>
  )
};