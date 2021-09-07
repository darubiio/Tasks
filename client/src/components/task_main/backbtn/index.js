import { Box } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import React from 'react';

export const BackBtn = () => {
  return (
    <Link to='/'>
      <Box p={1} as="button" mb={3} display={['revert', 'none']} >
        <i style={{fontSize: '1.4rem'}} className="bi bi-arrow-90deg-left"></i>
      </Box>
    </Link>
  )
};