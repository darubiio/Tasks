import React from 'react';
import { BackBtn } from '../backbtn';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { LIST } from '../../../fetching/query';
import { ScaleFade } from '@chakra-ui/transition';
import { Box, GridItem, Heading } from '@chakra-ui/react';
import { Task } from '../task/tasks';

export const List = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(LIST, { variables: { _id: id } });
  
  return (
    <GridItem p={[1, 5]} colSpan={[5, 4]}>
      <ScaleFade initialScale={0.9} in>
        <Box h='88vh' overflow='scroll'>
          <BackBtn />
          {loading ? '' :
            error ? `Error : ( ${error.message}` :
              data &&
                data.list ?
                <Box id={data.list._id}>
                  <Heading mb={5} size='lg' color='blackAlpha.500'>{data.list.name}</Heading>
                  {data.list.tasks.map(task =>
                    <Task key={task._id} completed={task.state} important={task.important} id={task._id} name={task.name} />
                  )}
                </Box>
                : ''
          }
        </Box>
      </ScaleFade>
    </GridItem>
  )
};