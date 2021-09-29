import { GridItem, Heading } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { BackBtn } from '../backbtn';

export const Important = () => {
  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <BackBtn />
        <Heading size='lg' color='red.400'>Importante</Heading>
      </ScaleFade>
    </GridItem>
  )
};