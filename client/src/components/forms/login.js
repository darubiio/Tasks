import React from 'react';
import { Formik, Form } from "formik";
import Ico from '../../image/task.ico';
import { TextInput } from './textinput';
import { CURRENT } from '../../fetching/query';
import { LOGIN } from '../../fetching/mutation';
import { useMutation, useQuery } from '@apollo/client';
import { Redirect, useHistory } from "react-router-dom";
import { Link, Img, Button, Center, GridItem, Heading, Stack} from "@chakra-ui/react";

export const Login = () => {
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
      <GridItem colSpan={5}>
        <Center h='100vh'>
          <Stack h={['66vh', '55vh']} shadow='2xl' rounded='2xl' p={10}>
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
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={async values => {
                await handleLogin(values.username, values.password)
              }}>
              <Form>
                <TextInput
                  mbn={2}
                  isRequired                 
                  ico={{name: 'bi bi-person-fill', color: 'gray.400'}}
                  name='username'
                  placeholder="Username"
                  errorBorderColor="red.300"
                  isInvalid={error && error.message === 'Invalid User' ? true : false}
                />
                <TextInput
                  mbn={6}
                  isRequired
                  psw='true'
                  ico={{name: 'bi bi-key-fill', color: 'gray.400'}}
                  name='password'
                  placeholder="Password"
                  errorBorderColor="red.300"
                  isInvalid={error && error.message === 'Invalid Password' ? true : false}
                />
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
              </Form>
            </Formik>
          </Stack>
        </Center>
      </GridItem>
  )
};