import { Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { BackBtn } from '../backbtn';

export const Important = () => {
  return (
    <ScaleFade initialScale={0.9} in>
      <BackBtn />
      <Heading size='lg' color='red.400'>Importante</Heading>
    </ScaleFade>
  )
};