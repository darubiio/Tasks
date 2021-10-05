import React from 'react';
import { Task } from './tasks';
import { Box, Text, ScaleFade, Image, Center } from '@chakra-ui/react';
import myday from '../../../image/components/myday.svg'
import important from '../../../image/components/important.svg'
import complted from '../../../image/components/complted.svg'


// Tasks without associated list
export const Tasksl = ({ loading, error, data, state }) => {

  // const state = () => {
  //   return (
  //   myDay ? 'tasksMyDay' :
  //     imptt ? 'tasksImportants' :
  //       cmplted ? 'tasksCompleted' : 'tasks'
  // )};

  // <Center h='80vh'>
  //   {state === 'tasksMyDay' ?
  //     <Image boxSize='45rem' src={myday} alt="My Day" /> :
  //     state === 'tasksImportants' ?
  //       <Image boxSize='45rem' src={important} alt="Important" /> :
  //       state === 'tasksCompleted' ?
  //         <Image boxSize='45rem' src={complted} alt="Completed" />
  //         : ''}
  // </Center>

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
                    <Task id={task._id} key={task._id} completed={task.state}  name={task.name} />
                  )}
                </Box> : 'a'
        }
      </ScaleFade>
    </Box>
  )
};