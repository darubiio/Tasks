import { Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { BackBtn } from '../backbtn';

export const All = () => {
  return (
    <ScaleFade initialScale={0.9} in>
      <BackBtn />
      <Heading size='lg' color='orange.500'>Todo</Heading>
    </ScaleFade>
  )
};