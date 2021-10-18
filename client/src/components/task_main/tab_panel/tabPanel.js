import React from 'react'
// import { useParams } from 'react-router';
import { BackBtn } from '../backbtn';
// import { Taskslists } from '../task/taskslists';
import { ScaleFade } from '@chakra-ui/transition';
import { Box, GridItem, Heading } from '@chakra-ui/layout';
import { useQueryParams } from '../../../hook/searchParams';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import * as Query from '../../../fetching/query'
import { Tasksl } from '../task/tasksl';

export const TabPanel = () => {
  let { tab } = useParams();
  let params = useQueryParams();
  const { loading, error, data } = useQuery(Query[tab.toUpperCase()]);

  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color='orange.500'>{params.get('name')}</Heading>
          <Tasksl state={tab} data={data} error={error} loading={loading} />
        </Box>
      </ScaleFade>
    </GridItem>
  )
};