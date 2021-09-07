import { Heading } from '@chakra-ui/layout';
import React from 'react';
import { ScaleFade } from '@chakra-ui/transition';
import { BackBtn } from '../backbtn';

export const Asigned = () => {
  return (
    <ScaleFade initialScale={0.9} in>
      <BackBtn />
      <Heading size='lg' color='purple.800'>Asignado</Heading>
    </ScaleFade>
  )
};