import React from 'react';
import { Box, Tab, Text } from '@chakra-ui/react';

export const List = ({ lists }) => {
  return (
    <Box overflow='scroll' w='100%' mb={4} mt={4} h={['40vh', '45vh']} >
      {lists.data && lists.data.lists ?
        lists.data.lists.map(list =>
          <Tab key={list._id} style={{ boxShadow: 'none' }}>
            <i className='bi bi-list-ul' />
            <Text ml={3}>{list.name}</Text>
          </Tab>
        )
        : ''}
                  
    </Box>
  )
};