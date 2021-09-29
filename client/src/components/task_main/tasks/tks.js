import { GridItem, Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { BackBtn } from '../backbtn';

export const Tasks = () => {
  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <BackBtn />
        <Heading size='lg' color='orange.800'>Tareas</Heading>
      </ScaleFade>
    </GridItem>
  )
};