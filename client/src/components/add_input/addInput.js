import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { GridItem } from '@chakra-ui/layout';

export const AddInput = ({ ...props }) => {
  return (
    <GridItem colSpan={[5, 4]}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<i className='bi bi-plus-square' />}
        />
        <Input type="text" placeholder="Agregar Tarea" />
      </InputGroup>
    </GridItem>
  )
};