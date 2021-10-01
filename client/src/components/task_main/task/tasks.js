import React from 'react';
import { Task } from '.';
import { Box, Text, ScaleFade } from '@chakra-ui/react';

// Tasks without associated list
export const Tasksl = ({ loading, error, data }) => {
  return (
    <Box mt={4}>
      <ScaleFade initialScale={0.9} in>
        {
          loading ? '' :
            error ? `Error : ( ${error.message}` :
              data.tasks.length !== 0 ?
                <Box>
                  <Text mt={4} ml={2} fontSize='sm'>Tareas</Text>
                  {data.tasks.map(task =>
                    <Task key={task._id} id={task._id} name={task.name} />
                  )}
                </Box>
                : ''
        }
      </ScaleFade>
    </Box>
  )
};