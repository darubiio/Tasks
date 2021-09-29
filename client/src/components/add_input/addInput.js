import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { GridItem } from '@chakra-ui/layout';
import { useLocation } from 'react-router';

export const AddInput = ({ ...props }) => {

  const location = useLocation().pathname
  const checkMode = () => {
    return location === '/' ? ['none', 'revert'] : null;
  }

  return (
    <GridItem display={checkMode} colSpan={[5, 4]}>
      <InputGroup
        borderColor={
          location === '/my-day' ? 'yellow.400' :
            location === '/important' ? 'red.400' :
              location === '/completed' ? 'cyan.700' :
                location === '/planned' ? 'blue.600' :
                  location === '/asigned' ? 'purple.800' :
                    location === '/task' ? 'orange.800' :
                      location === '/all' ? 'orange.500' :
                        null
        }
      >
        <InputLeftElement
          pointerEvents="none"
          children={<i className='bi bi-plus-square' />}
        />
        <Input type="text" placeholder="Agregar Tarea" />
      </InputGroup>
    </GridItem>
  )
};