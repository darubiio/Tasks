import React from 'react';
import { Center, GridItem, Heading, Stack } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Route, Switch } from 'react-router';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";

const LOGIN = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }`

export const Login = () => {  
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  let history = useHistory();
  
  const [logIn, { data, loading, error }] = useMutation(LOGIN);
  const handleLogin = async () => {
    await logIn({ variables: { username, password } });
    console.log(data);
    if (data) {
      localStorage.setItem('token', data.login.token);
      history.push("/");
    }      
    setUsername('');
    setPassword('');

    // redirect
  };

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
                  children={<i className="bi bi-person-fill" />}
                />
                <Input
                  type="text"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                  placeholder="usuario" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children={<i className="bi bi-key-fill" />}
                />
                <Input
                  type='password'
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="contraseña" />
              </InputGroup>
          
              <Button
                colorScheme="teal"
                onClick={handleLogin}
                variant="outline">
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