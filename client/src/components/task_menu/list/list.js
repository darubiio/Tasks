import React from 'react';
import { Box,Text, Tab, useOutsideClick } from '@chakra-ui/react';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { DELETE_LIST } from '../../../fetching/mutation';
import { DeleteIcon } from '@chakra-ui/icons'
import { LISTS } from '../../../fetching/query';
import { useMutation } from '@apollo/client';

export const List = ({ lists }) => {

  const [dList] = useMutation(DELETE_LIST, { errorPolicy: 'all' }),

    [isMenuOpen, setisMenuOpen] = React.useState(''),
    
    ref = React.useRef(),
    
    deleteList = async _id => {
      await dList({
        variables: { _id },
        refetchQueries: [{ query: LISTS }]
      })
    };

  useOutsideClick({
    ref: ref,
    handler: () => setisMenuOpen('')
  });

  return (
    <Box overflow='scroll' w='100%' mb={4} mt={4} h={['40vh', '45vh']} >
      {lists.data && lists.data.lists ?
        lists.data.lists.map(list =>
          <Tab
            ref={ref}
            key={list._id}
            onContextMenu={e => setisMenuOpen(list._id)}
            style={{ boxShadow: 'none' }}>
            
            <Menu
              isOpen={isMenuOpen !== list._id ? false : true}
              isLazy>
              <MenuButton as={Box}>
                <Box d='flex' alignItems='center' >
                  <i className='bi bi-list-ul' />
                  <Text ml={3} children={list.name}
                  />
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem
                  as={Box}
                  onClick={e => deleteList(list._id)}
                  icon={<DeleteIcon />}
                  command="⌫">
                  Eliminar
                </MenuItem>
                {/* Editar */}                
                {/* <MenuItem
                  as={Box}
                  icon={<EditIcon />}
                  command="␣">
                  Editar
                </MenuItem> */}
              
              </MenuList>
            </Menu>
          </Tab>
        )
        : ''}
                  
    </Box>
  )
};