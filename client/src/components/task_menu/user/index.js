import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { UserContext } from '../../../hooks/userContext';

export const User = () => {
  const { username, loading } = React.useContext(UserContext);
  return (
    loading ? '' :
        <Flex mb={5}>
          <Avatar alignSelf='center' ml={2} size='sm' name={username} />
          <Heading as='sm' alignSelf='center' ml={2} fontSize='md'>{username}</Heading>
          <Spacer />
          <Box as="button" p={2} mr={3} display={{ base: 'revert', md: 'none' }}>
            <i className='bi bi-search' />
          </Box>
        </Flex>
  )
};