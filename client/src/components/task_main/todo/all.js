import React from 'react';
import { Task } from '../task';
import { BackBtn } from '../backbtn';
import { useQuery } from '@apollo/client';
import { ALL_TASKS } from '../../../fetching/query';
import { ScaleFade, Box, GridItem, Heading, Text } from '@chakra-ui/react';

export const All = () => {
  const { loading, error, data } = useQuery(ALL_TASKS);

  // const Tasks =
  //   data &&
  //     data.tasks.length !== 0 ?
  //     <ScaleFade initialScale={0.9} in>
  //       <Box>
  //         <Text mt={4} ml={2} fontSize='sm'>Tareas</Text>
  //         {data.tasks.map(task =>
  //           <Task key={task._id} id={task._id} name={task.name} />
  //         )}
  //       </Box>
  //     </ScaleFade> : '';
  
  const TasksLists =
    data &&
      data.lists ?
      data.lists.map(list =>
        <ScaleFade initialScale={0.9} in>
          <Box key={list._id} id={list._id}>
            <Text mt={4} ml={2} fontSize='sm'>{list.name}</Text>
            {list.tasks.map(task =>
              <Task key={task._id} id={task._id} name={task.name} />
            )}
          </Box>
        </ScaleFade>
      ) : '';
            

  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          <Heading size='lg' color='orange.500'>Todo</Heading>
          {loading ? '' :
            error ? `Error : ( ${error.message}` :
              <>
                {/* {Tasks} */}
                {TasksLists}
              </>
          }
          
        </Box>
      </ScaleFade>
    </GridItem>
  )
};