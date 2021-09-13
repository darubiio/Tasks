import React from 'react';
import { MyDay } from '../myDay/md';
import { ScaleFade } from '@chakra-ui/transition';
import { GridItem } from '@chakra-ui/layout';

export const Main = () => {
  return (
    <GridItem display={['none', 'revert']} p={5} colSpan={5}>
      <ScaleFade initialScale={0.9} in>
        <MyDay />
      </ScaleFade>
    </GridItem>
  )
};