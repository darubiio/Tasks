import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Divider, GridItem, Text } from '@chakra-ui/layout';
import { CURRENT, LISTS } from '../../fetching/query';
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import { ScaleFade } from '@chakra-ui/transition';
import { useLocation } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { List } from './list/list';
import { User } from './user';
import { AddList } from './add_list/addList';

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
      <Link key={item.name} to={item.link}>
        <Tab style={{ boxShadow: 'none' }}>
          <i style={{ color: item.color }} className={item.icon} />
          <Text ml={3}>{item.name}</Text>
        </Tab>
      </Link>
    )
  }),

    location = useLocation().pathname,
  
    checkMode = () => {
      return location !== '/' ? ['none', 'revert'] : null;
    },

    // Current user check and list query
    current = useQuery(CURRENT),
    lists = useQuery(LISTS);

  return (
    current.error ? null :
      current.loading ? '' :
        <GridItem display={checkMode} rowSpan={2} colSpan={['5', '1']} pt={5}>
          <ScaleFade initialScale={0.9} in>
      
            {/* Avatar and user */}
            <User />

            {/* Search Input */}
            <InputGroup
              borderColor='teal'
              mb={5} display={{ base: 'none', md: 'revert' }} >
              <InputLeftElement
                boxShadow='none'
                pointerEvents='none'
                children={<i style={{ marginLeft: '10px' }} className='bi bi-search' />}
              />
              <Input ml={1} type='search' placeholder='Buscar' />
            </InputGroup>
      
            {/* List Menu */}
            <Tabs variant='line' orientation='vertical' isLazy colorScheme='teal'>
              <TabList w='100%' style={{ alignItems: 'start' }}>
                {/* Tab buttons list */}
                {MENU}
                <Divider w='90%' mt={4} ml={5} />
      
                <List lists={lists} />
                
              </TabList>
            </Tabs>
      
            <AddList />

          </ScaleFade>
        </GridItem>
  )
};