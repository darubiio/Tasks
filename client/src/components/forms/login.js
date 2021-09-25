import React from 'react';
import Ico from '../../image/task.ico';
import { Redirect, useHistory } from "react-router-dom";
import { CURRENT } from '../../fetching/query';
import { LOGIN } from '../../fetching/mutation';
import { useMutation, useQuery } from '@apollo/client';
import { FormControl, Link, Img, Button, Input, InputGroup, InputLeftElement, Center, GridItem, Heading, Stack} from "@chakra-ui/react";

export const Login = () => {
  let psw;
  let user;
  let history = useHistory();
  const current = useQuery(CURRENT);
  const [register, { data, loading, error }] = useMutation(LOGIN, { errorPolicy: 'all' });

  const handleLogin = async (username, password) => {
    await register({
      variables: { username, password }
    });
    current.refetch()
  };

  if (data) localStorage.setItem('token', data.login.token);

  return (
    current.data ? <Redirect to='/' /> :
      <GridItem colSpan={6}>
        <Center h='100vh'>
          <Stack h={['66vh', '55vh']} shadow='2xl' rounded='2xl' p={10}>
            <FormControl
              as='form'
              onSubmit={e => {
                e.preventDefault()
                handleLogin(user.value, psw.value)
              }}
            >
              <Heading color='blue.600' mt={4} mb={2} align="center">
                Sign In
              </Heading>
              <Heading color="blue.500" fontSize="xs" align="center" mb={4}>
                Task App by Alejandro Rubio
              </Heading>
              <Center children={
                <Img
                  width="40%"
                  align="center"
                  mb={4}
                  src={Ico}
                  alt="ico"
                />}
              />
              <InputGroup mb={2}>
                <InputLeftElement
                  pointerEvents="none"
                  color={error && error.message === 'Invalid User' ? 'red.400' : 'gray.400'}
                  fontSize="1.2em"
                  children={<i className="bi bi-person-fill" />}
                />
                <Input
                  id='usrname'
                  type="text"
                  isInvalid={error && error.message === 'Invalid User' ? true : false}
                  errorBorderColor="red.300"
                  isRequired
                  ref={node => {
                    user = node;
                  }}
                  placeholder="Username" />
              </InputGroup>

              <InputGroup mb={6}>
                <InputLeftElement
                  pointerEvents="none"
                  color={error && error.message === 'Invalid Password' ? 'red.400' : 'gray.400'}
                  fontSize="1.2em"
                  children={<i className="bi bi-key-fill" />}
                />
                <Input
                  id='passw'
                  type='password'
                  isInvalid={error && error.message === 'Invalid Password' ? true : false}
                  errorBorderColor="red.300"
                  isRequired
                  ref={node => {
                    psw = node;
                  }}
                  placeholder="Password" />
              </InputGroup>
              <Button
                isFullWidth
                isLoading={loading ? true : false}
                mr={2}
                mb={8}
                type="submit"
                colorScheme="blue"
                variant="solid">
                Sign In
              </Button>
              <Heading mb={2} fontSize="xs" align="center">
                Don't have an account ?
              </Heading>
              <Heading
                fontSize="sm"
                align="center"
                color="yellow.500"
                onClick={e => {
                  e.preventDefault()
                  history.push('/signup')
                }}>
                <Link>
                  Sign Up
                </Link>
              </Heading>
            </FormControl>
          </Stack>
        </Center>
      </GridItem>
  )
};