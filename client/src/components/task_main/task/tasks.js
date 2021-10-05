import React from 'react';
import { ScaleFade } from '@chakra-ui/transition';
import { Flex, Spacer, Text } from '@chakra-ui/layout';
import { useMutation } from '@apollo/client';
import { CHANGE_STATE } from '../../../fetching/mutation';
import { COMPLETED, IMPORTANTS } from '../../../fetching/query';

export const Task = ({ id, name, completed, important }) => {
  
  const [hover, sethover] = React.useState('md'),
    [stateChange] = useMutation(CHANGE_STATE, { errorPolicy: 'all' }),

    // PROXIMA TAREA SEPARAR MUTACIONES DE LOS ESTADOS DE LA TAREA!!!!
    
    handleStateChange = async (e, id, completed, important) => {
      await stateChange({
        variables: { _id: id, state: !completed, important: important, myDay: false },
        refetchQueries: [{ query: COMPLETED }]
      })
    },

    handleImportantChange = async () => {
      await stateChange({
        variables: { _id: id, state: completed, important: !important, myDay: false },
        refetchQueries: [{ query: IMPORTANTS }]
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
        <i onClick={e => handleStateChange(e, id, completed, important)} style={{ marginRight: '15px' }} className={!completed ? "bi bi-circle" : "bi bi-check-circle"} />
        <Text>{name}</Text>
        {/* textDecoration={!completed ? 'none' : 'underline'}  */}
        <Spacer />
        <i onClick={e => handleImportantChange(e, id, completed, important)} style={{ marginRight: '15px' }} className={!important ? "bi bi-star" : "bi bi-star-fill"} />
      </Flex>
    </ScaleFade>
  )
};