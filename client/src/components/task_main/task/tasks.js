import React from 'react';
import { ScaleFade } from '@chakra-ui/transition';
import { useMutation } from '@apollo/client';
import { Flex, Spacer, Text, Box } from '@chakra-ui/react';
import { CHANGE_STATE, CHANGE_IMPORTANT_STATE } from '../../../fetching/mutation';
import { COMPLETED, IMPORTANTS } from '../../../fetching/query';

export const Task = ({ id, name, completed, important, onOpen, btnRef, settaskD }) => {
  
  const [hover, sethover] = React.useState('md'),
    [stateChange] = useMutation(CHANGE_STATE),
    [stateImpChange] = useMutation(CHANGE_IMPORTANT_STATE),
    
    handleStateChange = async () => {
      await stateChange({
        variables: { _id: id, state: !completed },
        refetchQueries: [{ query: COMPLETED }]
      })
    },

    handleImportantChange = async () => {
      await stateImpChange({
        variables: { _id: id, important: !important },
        refetchQueries: [{ query: IMPORTANTS }]
      })
    },

    handleClick = onOpen => {
      onOpen()
      settaskD({ name })
    };

  return (
    <ScaleFade initialScale={0.9} in>
      <Box ref={btnRef} onClick={e => handleClick(onOpen) }>
      <Flex w='100%'
        textAlign='start'
        as='button' p={3}
        shadow={hover}
        onMouseEnter={() => sethover('xl')}
        onMouseLeave={() => sethover('md')}
        borderRadius='xl'
        mb={2}
        borderWidth="1px">
        <i onClick={e => handleStateChange(e, id, completed, important)} style={{ marginRight: '15px' }} className={!completed ? "bi bi-circle" : "bi bi-check-circle"} />
        <Text>{name}</Text>
        {/* textDecoration={!completed ? 'none' : 'underline'}  */}
        <Spacer />
        <i onClick={e => handleImportantChange(e, id, completed, important)} style={{ marginRight: '15px' }} className={!important ? "bi bi-star" : "bi bi-star-fill"} />
      </Flex>
      </Box>
    </ScaleFade>
  )
};