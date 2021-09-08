import { Flex, Spacer, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';


export const Task = ({id, name}) => {
  const [hover, sethover] = useState('md');

  return (    
    <Flex w='100%'
      textAlign='start'
      as='button' p={3}
      shadow={hover}
      onMouseEnter={() => sethover('xl')}
      onMouseLeave={() => sethover('md')}
      borderRadius='xl'
      borderWidth="1px">
      <i style={{ marginRight: '15px'}} className="bi bi-circle" />
      <Text>{name}</Text>
      <Spacer />
      <i style={{ marginRight: '15px'}} className="bi bi-star" />
    </Flex>
  )
};