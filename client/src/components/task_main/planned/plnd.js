import { Box, GridItem, Heading } from '@chakra-ui/layout';
import React from 'react';
import { ScaleFade } from '@chakra-ui/transition';
import { BackBtn } from '../backbtn';
import { Center, Image } from '@chakra-ui/react';
import planned from '../../../image/components/planned.svg'

export const Planned = () => {
  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color='blue.600'>Planeado</Heading>
          <Center h='80vh'>
            <Image boxSize='45rem' src={planned} alt="Important" />
          </Center>
        </Box>
      </ScaleFade>
    </GridItem>
  )
};