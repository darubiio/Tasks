import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import { Task } from './tasks';
import { Tasksl } from './tasksl'

export const Taskslists = ({ loading, error, data, state, onOpen, btnRef, settaskD }) => {
  return (
    loading ? '' :
      error ? `Error : ( ${error.message}` :
        data &&
          data.lists ?
          <>
          <Tasksl settaskD={settaskD} onOpen={onOpen} btnRef={btnRef} state={state} loading={loading} error={error} data={data} />
          <ScaleFade initialScale={0.9} in>
            {data.lists.map(list =>
              <Box key={list._id} id={list._id}>
                <Text mt={4} ml={2} fontSize='sm'>{list.name}</Text>
                {list.tasks.map(task =>
                  <Task settaskD={settaskD} onOpen={onOpen} btnRef={btnRef} key={task._id} completed={task.state} important={task.important} id={task._id} name={task.name} />
                )}
              </Box>
            )}
            </ScaleFade>
            </>
          : ''
  )}