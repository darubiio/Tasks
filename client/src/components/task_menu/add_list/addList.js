import React from 'react';
import { useMutation } from '@apollo/client';
import { LISTS } from '../../../fetching/query';
import { ADD_LIST } from '../../../fetching/mutation';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';

export const AddList = () => {
  let list;
  const [createList] = useMutation(ADD_LIST, { errorPolicy: 'all' }),
    
  handleNewList = async name => {
    await createList({
      variables: { name },
      refetchQueries: [{ query: LISTS }]
    })
  };

  return (
    <InputGroup borderColor='teal' mt={5}>
      <InputLeftElement
        ml={1}
        boxShadow='none'
        pointerEvents='none'
        children={<i className='bi bi-plus-square' />}
      />
      <Input
        type='text'
        ref={node => {
          list = node;
        }}
        placeholder='Crear Lista'
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleNewList(list.value)
            list.value = ''
          }
        }}
      />
    </InputGroup>
  )
};