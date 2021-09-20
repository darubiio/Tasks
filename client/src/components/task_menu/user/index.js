import React from 'react';
import { useQuery } from '@apollo/client';
import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { CURRENT } from '../../../fetching/query';

export const User = () => {
  const { loading, data } = useQuery(CURRENT);
  return (
    loading ? '' :
        <Flex mb={5}>
          <Avatar alignSelf='center' ml={2} size='sm' name={data.currentUser.username} />
          <Heading as='sm' alignSelf='center' ml={2} fontSize='md'>{data.currentUser.username}</Heading>
          <Spacer />
          <Box as="button" p={2} mr={3} display={{ base: 'revert', md: 'none' }}>
            <i className='bi bi-search' />
          </Box>
        </Flex>
  )
};