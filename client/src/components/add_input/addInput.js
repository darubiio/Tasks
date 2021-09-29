import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { GridItem } from '@chakra-ui/layout';
import { useLocation } from 'react-router';
import { useQuery } from '@apollo/client';
import { CURRENT } from '../../fetching/query';

export const AddInput = () => {

  let task;
  const { loading } = useQuery(CURRENT);

  const location = useLocation().pathname
  const checkMode = () => {
    return location === '/' ? ['none', 'revert'] : null;
  }

  const addTask = (task) => {
    console.log(task);
  }

  return (
    loading ? '' :
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
                          'teal'
          }>
          <InputLeftElement
            pointerEvents="none"
            children={<i className='bi bi-plus-square' />}
          />
          <Input
            type="text"
            ref={node => {
              task = node;
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                addTask(task.value)
                task.value = ''
              }
            }}
            placeholder="Agregar Tarea" />
        </InputGroup>
      </GridItem>
  )
};