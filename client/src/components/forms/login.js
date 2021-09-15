import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Center, GridItem, Heading, Stack } from '@chakra-ui/layout';
import { Redirect } from "react-router-dom";
import { ScaleFade } from '@chakra-ui/transition';
import { gql, useMutation, useQuery } from '@apollo/client';
import { FormControl } from "@chakra-ui/react";
import { Button } from '@chakra-ui/button';
import { CURRENT } from '../../fetching/query'

const LOGIN = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }`

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
  if (current) console.log(current.data);

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
              <Heading mb={4}>Welcome Back</Heading>
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
                  isRequired
                  ref={node => {
                    user = node;
                  }}
                  placeholder="usuario" />
              </InputGroup>

              <InputGroup mb={4}>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children={<i className="bi bi-key-fill" />}
                />
                <Input
                  id='passw'
                  type='password'
                  isRequired
                  ref={node => {
                    psw = node;
                  }}
                  placeholder="contraseña" />
              </InputGroup>
              <small>{error ? error.message : null}</small>
              <Button
                isLoading={loading ? true : false}
                mr={2}
                type="submit"
                colorScheme="teal"
                variant="outline">
                Iniciar Sesion
              </Button>
              <Button colorScheme="orange" variant="outline">
                Registrarse
              </Button>
            </FormControl>
          </Stack>
        </Center>
      </GridItem>
  )
};