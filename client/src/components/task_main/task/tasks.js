import React from 'react';
import { Task } from '.';
import { Box, Text, ScaleFade, Image, Center } from '@chakra-ui/react';
import myday from '../../../image/components/myday.svg'
import important from '../../../image/components/important.svg'
import complted from '../../../image/components/complted.svg'


// Tasks without associated list
export const Tasksl = ({ loading, error, data, myDay, imptt, cmplted }) => {
  return (
    <Box mt={4}>
      <ScaleFade initialScale={0.9} in>
        {
          loading ? '' :
            error ? `Error : ( ${error.message}` :
              data.tasks &&
                data.tasks.length !== 0 ?
                <Box>
                  <Text mt={4} ml={2} fontSize='sm'>Tareas</Text>
                  {data.tasks.map(task =>
                    <Task key={task._id} id={task._id} name={task.name} />
                  )}
                </Box> :
                <Center h='80vh'>
                  {myDay ?
                    <Image boxSize='45rem' src={myday} alt="My Day" /> :
                    imptt ?
                      <Image boxSize='45rem' src={important} alt="Important" /> :
                      cmplted ?
                        <Image boxSize='45rem' src={complted} alt="Completed" />
                        : 'aa'}
                </Center>
        }
      </ScaleFade>
    </Box>
  )
};