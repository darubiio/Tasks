import React from 'react';
import { BackBtn } from '../backbtn';
import { Tasksl } from '../task/tasksl';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { DrawerC } from '../drawer/drawer';
import { Taskslists } from '../task/taskslists';
import * as Query from '../../../fetching/query';
import { ScaleFade } from '@chakra-ui/transition';
import { useQueryParams } from '../../../hook/searchParams';
import { Box, GridItem, Heading, useDisclosure } from '@chakra-ui/react';

export const TabPanel = () => {
  
  // Current date to display in my_day panel
  const date = new Date().toDateString(),
    
  // Custom hook to get url parameters
    { tab } = useParams(),
    params = useQueryParams(),

    // Consult depending on the selected parameter
    { loading, error, data } = useQuery(Query[tab.toUpperCase()]),
    
    // Change color depending on selected tab
    theme = {
      color: {
        my_day: '#ECC94B',
        importants: '#CA3B3B',
        planned: '#2C5282',
        all_tasks: '#9B2C2C',
        completed: '#38B2AC',
        asigned: '#6B46C1',
        tasks: '#975A16'
      }
    },

    [taskD, settaskD] = React.useState({}),
    { isOpen, onOpen, onClose } = useDisclosure(),
    btnRef = React.useRef();
  
  return (
    <GridItem display={params.get('main') !== null ? ['none', 'revert'] : ''} p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color={theme.color[tab]}>{params.get('name')}</Heading>
          {tab === 'my_day' ?
            <Heading as="h6" size="xs">{date}</Heading> : ''}
          {tab !== 'all_tasks' ?
            <Tasksl settaskD={settaskD} onOpen={onOpen} btnRef={btnRef} state={tab} data={data} error={error} loading={loading} /> :
            <Taskslists settaskD={settaskD}  onOpen={onOpen} btnRef={btnRef} state='tasks' loading={loading} error={error} data={data} />
          }
        </Box>
      </ScaleFade>
      <DrawerC taskD={taskD} onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </GridItem>
  )
};