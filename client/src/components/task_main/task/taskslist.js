import React from 'react';
import { Task } from '.';
import { Box } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';

// Tasks without associated list
export const Tasksl = ({ loading, error, data }) => {
  return (
    <ScaleFade initialScale={0.9} in>
      <Box mt={4}>
        {
          loading ? '' :
            error ? `Error : ( ${error.message}` :
              data.tasks.length !== 0 ?
                data.tasks.map(task =>
                  <Task key={task._id} id={task._id} name={task.name} />
                ) : ''}
      </Box>
    </ScaleFade>
  )
};