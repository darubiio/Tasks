import React from 'react';
import Ico from '../../image/task.ico';
import { Redirect, useHistory } from "react-router-dom";
import { CURRENT } from '../../fetching/query';
import { useMutation, useQuery } from '@apollo/client';
import { FormControl, Link, Img, Button, Input, ScaleFade, InputGroup, InputLeftElement, Center, GridItem, Heading, Stack} from "@chakra-ui/react";

export const SignUp = () => {
  let psw;
  let user;
  let history = useHistory();
  const current = useQuery(CURRENT);

  return (
    current.data ? <Redirect to='/' /> :
      <GridItem colSpan={6}>
        <ScaleFade initialScale={0.9} in></ScaleFade>
        <Center h='100vh'>
          <Stack color='white' bg='blue.600' h={['67vh', '56vh']} shadow='2xl' rounded='2xl' p={8}>
              <FormControl
                as='form'
                onSubmit={e => {
                  e.preventDefault()
                
                }}
              >
              <Heading                
                mb={2} align="center">
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
                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    // color={error && error.message === 'Invalid User' ? 'red.400' : 'gray.400'}
                    fontSize="1.2em"
                    children={<i className="bi bi-person-fill" />}
                  />
                  <Input
                    id='usrname'
                    type="text"
                    // isInvalid={error && error.message === 'Invalid User' ? true : false}
                    errorBorderColor="red.300"
                    isRequired
                    ref={node => {
                      user = node;
                    }}
                    placeholder="Username" />
                </InputGroup>

                <InputGroup mb={2}>
                  <InputLeftElement
                    pointerEvents="none"
                    fontSize="1.2em"
                    children={<i className="bi bi-key-fill" />}
                  />
                  <Input
                    id='passw'
                    type='password'
                    errorBorderColor="red.300"
                    isRequired
                    ref={node => {
                      psw = node;
                    }}
                    placeholder="Password" />
                </InputGroup>

                <InputGroup mb={6}>
                  <InputLeftElement
                    pointerEvents="none"
                    fontSize="1.2em"
                    children={<i className="bi bi-key-fill" />}
                  />
                  <Input
                    id='passw'
                    type='password'
                    errorBorderColor="red.300"
                    isRequired
                    ref={node => {
                      psw = node;
                    }}
                    placeholder="Confirm Password" />
                </InputGroup>

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
              </FormControl>
          </Stack>
        </Center>
      </GridItem>
  )
};