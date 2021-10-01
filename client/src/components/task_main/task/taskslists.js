import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import { Task } from '.';
import { Tasksl } from './tasks'

export const Taskslists = ({ loading, error, data }) => {
  return (
    loading ? '' :
      error ? `Error : ( ${error.message}` :
        data &&
          data.lists ?
          <>
          <Tasksl loading={loading} error={error} data={data} />
          <ScaleFade initialScale={0.9} in>
            {data.lists.map(list =>
              <Box key={list._id} id={list._id}>
                <Text mt={4} ml={2} fontSize='sm'>{list.name}</Text>
                {list.tasks.map(task =>
                  <Task key={task._id} id={task._id} name={task.name} />
                )}
              </Box>
            )}
            </ScaleFade>
            </>
          : ''
  )}