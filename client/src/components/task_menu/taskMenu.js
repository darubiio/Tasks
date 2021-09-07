import { Avatar } from '@chakra-ui/avatar';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Divider, Flex, GridItem, Heading, Spacer, Text } from '@chakra-ui/layout';
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import { Link } from 'react-router-dom';
import React from 'react';

export const TaskMenu = () => {
  const MENU = [
    {
      name: 'Mi Día', icon: 'bi bi-sun', color: '#ECC94B', link: '/my-day'
    }, {
      name: 'Importante', icon: 'bi bi-star', color: '#9B2C2C', link: '/important'
    }, {
      name: 'Planeado', icon: 'bi bi-calendar-event', color: '#2C5282', link: '/planned'
    }, {
      name: 'Todo', icon: 'bi bi-list', color: '#9B2C2C', link: '/all'
    }, {
      name: 'Completado', icon: 'bi bi-check2-circle', color: '#38B2AC', link: '/completed'
    }, {
      name: 'Asignado', icon: 'bi bi-person', color: '#6B46C1', link: '/asigned'
    }, {
      name: 'Tareas', icon: 'bi bi-folder-check', color: '#975A16', link: '/tasks'
    }
  ].map((item) => {
    return (
      <Link to={item.link}>
        <Tab style={{ boxShadow: 'none' }}>
          <i style={{ color: item.color }} className={item.icon} />
          <Text ml={3}>{item.name}</Text>
        </Tab>
      </Link>
    )
  });

  return (
    <GridItem colSpan={['7','1']} pt={5} pb={5}>
      
      {/* Avatar and user */}
      <Flex>
        <Avatar alignSelf='center' ml={2} size='sm' name="Sandra Elena" />
        <Heading as='sm' alignSelf='center' ml={2} fontSize='md'>Sandra Elena</Heading>
        <Spacer />
        <Box as="button" p={2} mr={3} display={{ base: 'revert', md: 'none' }}>
          <i className='bi bi-search' />
        </Box>
      </Flex>

      {/* Search Input */}
      <InputGroup borderColor='teal' mt={5} mb={5} display={{ base: 'none', md: 'revert' }} >
        <InputLeftElement
          boxShadow='none'
          pointerEvents='none'
          children={<i style={{ marginLeft: '10px' }} className='bi bi-search' />}
        />
        <Input ml={1} type='search' placeholder='Buscar' />
      </InputGroup>

      <Divider display={{ md: 'none', base: 'revert', }} w='90%' m={4} />
      
      {/* List Menu */}
      <Tabs variant='line' orientation='vertical' isLazy colorScheme='teal'>
        <TabList w='100%' style={{ alignItems: 'start' }}>
          
          {MENU}
          <Divider colorScheme='teal' w='90%' mt={4} ml={5} />
      
          {/* Added lists */}
          <Box overflow='scroll' w='100%' mb={4} mt={4} h={['25vh', '43vh']} >
            <Tab style={{ boxShadow: 'none' }}>
              <i className='bi bi-list-ul' />
              <Text ml={3}>New List 1</Text>
            </Tab>
            <Tab style={{ boxShadow: 'none' }}>
              <i className='bi bi-list-ul' />
              <Text ml={3}>New List 2</Text>
            </Tab>
          </Box>

        </TabList>
      </Tabs>
      
      {/* Add List */}
      <InputGroup borderColor='teal' mt={5} >
        <InputLeftElement
          ml={1}
          boxShadow='none'
          pointerEvents='none'
          children={<i style={{ marginLeft: '10px' }} className='bi bi-plus-square' />}
        />
        <Input ml={2} type='text' placeholder='New List' />
      </InputGroup>
    </GridItem>
  )
};