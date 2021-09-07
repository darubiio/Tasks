import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { AddIcon } from '@chakra-ui/icons';

export const AddInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<AddIcon color="gray.300" />}
      />
      <Input type="tel" placeholder="New List" />
    </InputGroup>
  )
};