import { Avatar } from '@chakra-ui/avatar';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Text, WrapItem } from '@chakra-ui/layout';
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import React from 'react';

export const TaskMenu = () => {
  const MENU = [
    {
      name: 'My Day', icon: 'bi bi-sun', color: '#ECC94B'
    }, {
      name: 'Important', icon: 'bi bi-star', color: '#9B2C2C'
    }, {
      name: 'Planeado', icon: 'bi bi-calendar-event', color: '#2C5282'
    }, {
      name: 'Todo', icon: 'bi bi-list', color: '#9B2C2C'
    }, {
      name: 'Completado', icon: 'bi bi-check2-circle', color: '#38B2AC'
    }, {
      name: 'Asignado', icon: 'bi bi-person', color: '#6B46C1'
    }, {
      name: 'Tareas', icon: 'bi bi-folder-check', color: '#975A16'
    }
  ].map((item) => {
    return (
      <Tab style={{ boxShadow: 'none' }}>
        <i style={{ color: item.color }} className={item.icon} />
        <Text ml={3}>{item.name}</Text>
      </Tab>
    )
  });

  return (
    <Box mt={5} w={['100%', '15%']} h='100vh'>
      
    {/* Avatar and user */}
    <WrapItem mb={5}>
      <Avatar ml={2} size='sm' name="Sandra Elena" />
      <Text alignSelf='center' ml={2} fontSize='md'>Sandra Elena</Text>
    </WrapItem>

      {/* Search Input */}
      <InputGroup>
        <InputLeftElement
          boxShadow='none'
          pointerEvents='none'
          children={<i style={{marginLeft:'10px'}} className='bi bi-search' />}
        />
        <Input ml={1} type='search' placeholder='Buscar' />
      </InputGroup>
      
      {/* List Menu */}
      <Tabs mt={5} size='md' variant='line' orientation='vertical' isLazy colorScheme='blackAlpha'>
        <TabList style={{ alignItems: 'start' }}>
          <Text >{MENU}</Text>
        </TabList>
      </Tabs>
    </Box>
  )
};