import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Center, GridItem, Heading, Stack, Text } from '@chakra-ui/layout';
import { Redirect } from "react-router-dom";
import { ScaleFade } from '@chakra-ui/transition';
import { useMutation, useQuery } from '@apollo/client';
import { FormControl, Img } from "@chakra-ui/react";
import { Button } from '@chakra-ui/button';
import { CURRENT } from '../../fetching/query';
import { LOGIN } from '../../fetching/mutation';
import img from '../../image/task.ico';

export const Login = () => {
  let psw;
  let user;
  const current = useQuery(CURRENT);
  const [logIn, { data, loading, error }] = useMutation(LOGIN);

  const handleLogin = async (username, password) => {
    await logIn({
      variables: { username, password },
    });
    current.refetch()
  };

  if (data) localStorage.setItem('token', data.login.token);

  return (
    current.data ? <Redirect to='/' /> :
      <GridItem colSpan={6}>
        <ScaleFade initialScale={0.9} in></ScaleFade>
        <Center h='100vh'>
          <Stack shadow='2xl' rounded='2xl' p={8}>
            <FormControl
              as='form'
              onSubmit={e => {
                e.preventDefault()
                handleLogin(user.value, psw.value)
              }}
            >
              <Heading mb={2} align="center">
                Welcome !
              </Heading>
              <Heading color="blue.500" fontSize="xs" align="center" mb={4}>
                Task App by Alejandro Rubio
              </Heading>
              <Center children={
                <Img
                  width="40%"
                  align="center"
                  mb={4}
                  src={img}
                  alt="ico"
                />}
              />
                
              <InputGroup mb={2}>
                <InputLeftElement
                  pointerEvents="none"                  
                  color="gray.300"
                  fontSize="1.2em"
                  children={<i className="bi bi-person-fill" />}
                />
                <Input
                  id='usrname'
                  type="text"
                  // isInvalid
                  errorBorderColor="red.300"
                  isRequired
                  ref={node => {
                    user = node;
                  }}
                  placeholder="username" />
              </InputGroup>

              <InputGroup mb={6}>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children={<i className="bi bi-key-fill" />}
                />
                <Input
                  id='passw'
                  type='password'
                  // isInvalid
                  errorBorderColor="red.300"
                  isRequired
                  ref={node => {
                    psw = node;
                  }}
                  placeholder="password" />
              </InputGroup>            
              <Button
                isFullWidth
                isLoading={loading ? true : false}
                mr={2}
                mb={2}
                type="submit"
                colorScheme="blue"
                variant="solid">
                Sign In
              </Button>
              <Button
                isFullWidth
                colorScheme="orange"
                variant="solid">
                Sign Up
              </Button>
            </FormControl>
          </Stack>
        </Center>
      </GridItem>
  )
};