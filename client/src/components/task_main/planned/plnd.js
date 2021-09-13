import { GridItem, Heading } from '@chakra-ui/layout';
import React from 'react';
import { ScaleFade } from '@chakra-ui/transition';
import { BackBtn } from '../backbtn';

export const Planned = () => {
  return (
    <GridItem p={5} colSpan={5}>
      <ScaleFade initialScale={0.9} in>
        <BackBtn />
        <Heading size='lg' color='blue.600'>Planeado</Heading>
      </ScaleFade>
    </GridItem>
  )
};