import React from 'react'
import { BackBtn } from '../backbtn';
import { Taskslists } from '../task/taskslists';
import { ScaleFade } from '@chakra-ui/transition';
import { Box, GridItem, Heading } from '@chakra-ui/layout';
import { useQueryParams } from '../../../hook/searchParams';
import * as Query from '../../../fetching/query'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { Tasksl } from '../task/tasksl';

export const TabPanel = () => {
  const { tab } = useParams(),
    params = useQueryParams(),
    { loading, error, data } = useQuery(Query[tab.toUpperCase()]),
    date = new Date().toDateString(),
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
    };
  
  return (
    <GridItem display={params.get('main') != null ? ['none', 'revert'] : ''} p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color={theme.color[tab]}>{params.get('name')}</Heading>
          {tab === 'my_day' ?
            <Heading as="h6" size="xs">{date}</Heading> : ''}
          {tab !== 'all_tasks' ?
            <Tasksl state={tab} data={data} error={error} loading={loading} /> :
            <Taskslists state='tasks' loading={loading} error={error} data={data} />
          }
        </Box>
      </ScaleFade>
    </GridItem>
  )
};