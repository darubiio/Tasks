import React from 'react';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Ico from '../../image/task.ico';
import { useMutation, useQuery } from '@apollo/client';
import { Redirect, useHistory } from "react-router-dom";
import { CURRENT } from '../../fetching/query';
import { Link, Img, Button, ScaleFade, Center, GridItem, Heading, Stack } from "@chakra-ui/react";
import { TextInput } from './textinput';


export const SignUp = () => {
  let history = useHistory();
  const current = useQuery(CURRENT);

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
                passworda: "",
                passwordb: ""
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .min(4, "Must be at least 4 characters")
                  .required("Required"),
                passworda: Yup.string()
                  .min(6, "Must be at least 6 characters")
                  .required("Required"),
                passwordb: Yup.string()
                  .oneOf([Yup.ref("passworda"), null], "Passwords must match")
                  .required("Required")
              })}
              onSubmit={async (values) => {
                console.log(values)
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
                  eye='true'
                  ico='bi bi-key-fill'
                  name='passworda'
                  mbn={1}
                  type='password'
                  placeholder="Password"
                />

                <TextInput
                  eye='true'
                  ico='bi bi-key-fill'
                  name='passwordb'
                  mbn={6}
                  type='password'
                  placeholder="Confirm Password"
                />
                
                <Button
                  isFullWidth
                  // isLoading={loading ? true : false}
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