import { Heading, Stack, Text } from '@chakra-ui/layout';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { BackBtn } from '../backbtn';
import { Task } from '../task'

export const All = () => {
  return (
    <>
      <ScaleFade initialScale={0.9} in>
        <BackBtn />
        <Heading size='lg' color='orange.500'>Todo</Heading>
      </ScaleFade>

      <Text mt={2} ml={2} fontSize='sm'>Nombre de Lista</Text>
      <Stack >
        <Task name='Tarea 1' />
        <Task name='Tarea 2' />
      </Stack>
    </>
  )
};