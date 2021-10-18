import React from 'react';
import { Task } from './tasks';
import { Box, Text, ScaleFade, Image, Center } from '@chakra-ui/react';
import myday from '../../../image/components/myday.svg';
import complted from '../../../image/components/complted.svg';
import important from '../../../image/components/important.svg';

// Tasks without associated list
export const Tasksl = ({ loading, error, data, state }) => {

  return (
    <Box mt={4}>
      <ScaleFade initialScale={0.9} in>
        {
          loading ? '' :
            error ? `Error : ( ${error.message}` :
              data[state] &&
                data[state].length !== 0 ?
                <Box>
                  <Text mt={4} ml={2} fontSize='sm'>Tareas</Text>
                  {data[state].map(task =>
                    <Task id={task._id} key={task._id} completed={task.state} important={task.important}  name={task.name} />
                  )}
                </Box> :
                  <Center h='80vh'>
                    {state === 'my_day' ?
                      <Image boxSize='45rem' src={myday} alt="My Day" /> :
                      state === 'importants' ?
                        <Image boxSize='45rem' src={important} alt="Important" /> :
                        state === 'completed' ?
                          <Image boxSize='45rem' src={complted} alt="Completed" />
                          : ''}
                  </Center>
        }
      </ScaleFade>
    </Box>
  )
};