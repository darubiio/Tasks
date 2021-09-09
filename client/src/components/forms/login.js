import React from 'react';
import { Center, GridItem, Heading, Stack } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Route, Switch } from 'react-router';

export const Login = () => {
  return (
    <Switch>
      <Route path='/login'>
        <GridItem colSpan={6}>
          <Center w="100%" h='100vh'>
            <Stack shadow='2xl' rounded='2xl' p={8} spacing={4}>
              <Heading mb={4}>Welcome Back</Heading>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children={<i class="bi bi-person-fill" />}
                />
                <Input type="text" placeholder="usuario" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children={<i class="bi bi-key-fill" />}
                />
                <Input placeholder="contraseña" />
              </InputGroup>
          
              <Button colorScheme="teal" variant="outline">
                Iniciar Sesion
              </Button>

              <Button colorScheme="orange" variant="outline">
                Registrarse
              </Button>
            </Stack>
          </Center>
        </GridItem>
      </Route>
    </Switch>
  )
};