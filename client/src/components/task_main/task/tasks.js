import React from 'react';
import { ScaleFade } from '@chakra-ui/transition';
import { Flex, Spacer, Text } from '@chakra-ui/layout';
import { useMutation } from '@apollo/client';
import { CHANGE_STATE } from '../../../fetching/mutation';
import { COMPLETED } from '../../../fetching/query';

export const Task = ({ id, name, completed }) => {
  
  const [hover, sethover] = React.useState('md'),
    [stateChange] = useMutation(CHANGE_STATE, { errorPolicy: 'all' }),
    
    handleStateChange = async (e, id, completed) => {
      await stateChange({
        variables: { _id: id, state: !completed, important: false, myDay: false },
        refetchQueries: [{ query: COMPLETED }]
      })
    };

  return (
    <ScaleFade initialScale={0.9} in>
      <Flex w='100%'
        textAlign='start'
        as='button' p={3}
        shadow={hover}
        onMouseEnter={() => sethover('xl')}
        onMouseLeave={() => sethover('md')}
        borderRadius='xl'
        mb={2}
        borderWidth="1px">
        <i onClick={e => handleStateChange(e, id, completed)} style={{ marginRight: '15px' }} className={!completed ? "bi bi-circle" : 'bi bi-check-circle'} />
        <Text>{name}</Text>
        {/* textDecoration={!completed ? 'none' : 'underline'}  */}
        <Spacer />
        <i style={{ marginRight: '15px' }} className="bi bi-star" />
      </Flex>
    </ScaleFade>
  )
};