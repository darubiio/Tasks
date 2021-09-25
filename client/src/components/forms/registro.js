import React from 'react';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Ico from '../../image/task.ico';
import { TextInput } from './textinput';
import { CURRENT } from '../../fetching/query';
import { SIGNUP } from '../../fetching/mutation';
import { useMutation, useQuery } from '@apollo/client';
import { Redirect, useHistory } from "react-router-dom";
import { Link, Text, Img, Button, ScaleFade, Center, GridItem, Heading, Stack } from "@chakra-ui/react";

export const SignUp = () => {
  let history = useHistory();
  const current = useQuery(CURRENT);
  const [signUp, { loading, error }] = useMutation(SIGNUP, { errorPolicy: 'all' });

  const handleSignUp = async (username, password) => {
    await signUp({
      variables: { username, password }
    });
  };

  return (
    current.data ? <Redirect to='/' /> :
      <GridItem colSpan={6}>
        <ScaleFade initialScale={0.9} in></ScaleFade>
        <Center h='100vh'>
          <Stack color='white' bg='blue.600' h={['67vh', '64vh']} shadow='2xl' rounded='2xl' p={10}>
            <Heading
              mb={2} mt={3}
              align="center">
              Sign Up
            </Heading>
            <Heading fontSize="xs" align="center" mb={4}>
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
                passwordb: ""
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .min(4, "Must be at least 4 characters")
                  .lowercase("Most be a lowercase user")
                  .required("Required"),
                password: Yup.string()
                  .min(6, "Must be at least 6 characters")
                  .required("Required"),
                passwordb: Yup.string()
                  .oneOf([Yup.ref("password"), null], "Passwords must match")
                  .required("Required")
              })}
              onSubmit={async values => {
                await handleSignUp(values.username, values.password)
                history.push('/login')
              }}
            >
              <Form>
                <TextInput
                  ico='bi bi-person-fill'
                  type='text'
                  mbn={3}
                  name='username'
                  placeholder="Username"
                />

                <TextInput
                  mbn={1}
                  psw='true'
                  name='password'
                  ico='bi bi-key-fill'
                  placeholder="Password"
                />

                <TextInput
                  mbn={6}
                  psw='true'
                  name='passwordb'
                  ico='bi bi-key-fill'
                  placeholder="Confirm Password"
                />

                {error ? <Text fontSize="xs" color='red.300'>😕 {error.message}</Text> : null}
                
                <Button
                  isFullWidth
                  isLoading={loading ? true : false}
                  mr={2}
                  mb={8}
                  type="submit"
                  colorScheme="whiteAlpha"
                  variant="solid">
                  Sign Up
                </Button>
                
                <Heading mb={2} fontSize="xs" align="center">
                  Already have an account ?
                </Heading>
                <Heading
                  fontSize="sm"
                  align="center"
                  color="yellow.500"
                  onClick={e => {
                    e.preventDefault()
                    history.push('/login')
                  }}>
                  <Link>
                    Sign In
                  </Link>
                </Heading>

              </Form>
            </Formik>
          </Stack>
        </Center>
      </GridItem>
  )
};