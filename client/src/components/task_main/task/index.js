import { Flex, Spacer, Text } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React, { useState } from 'react';


export const Task = ({ id, name }) => {
  const [hover, sethover] = useState('md');

  return (
    <ScaleFade initialScale={0.9} in>
      <Flex w='100%'
        textAlign='start'
        as='button' p={3}
        shadow={hover}
        onMouseEnter={() => sethover('xl')}
        onMouseLeave={() => sethover('md')}
        borderRadius='xl'
        mb={2}
        borderWidth="1px">
        <i style={{ marginRight: '15px' }} className="bi bi-circle" />
        <Text>{name}</Text>
        <Spacer />
        <i style={{ marginRight: '15px' }} className="bi bi-star" />
      </Flex>
    </ScaleFade>
  )
};