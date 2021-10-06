import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { GridItem } from '@chakra-ui/layout';
import { useLocation } from 'react-router';
import { useMutation, useQuery } from '@apollo/client';
import { CURRENT } from '../../../fetching/query';
import { ADD_TASK } from '../../../fetching/mutation';
import { ALL_TASKS } from '../../../fetching/query';

export const AddInput = () => {

  let task;
  const { loading } = useQuery(CURRENT);

  const location = useLocation().pathname
  const checkMode = () => {
    return location === '/' ? ['none', 'revert'] : null;
  }

  const [addT] = useMutation(ADD_TASK, { errorPolicy: 'all' });

  const addTask = async name => {
    await addT({
      variables: { name },
      refetchQueries: [{ query: ALL_TASKS}]
    })
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