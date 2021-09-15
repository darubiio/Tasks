import { GridItem, Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { BackBtn } from '../backbtn';

export const Completed = () => {
  return (
    <GridItem p={5} colSpan={5}>
      <ScaleFade initialScale={0.9} in>
        <BackBtn />
        <Heading size='lg' color='cyan.700'>Completado</Heading>
      </ScaleFade>
    </GridItem>
  )
};