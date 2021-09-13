import React from 'react';

import { Main } from './main';
import { All } from './todo/all';
import { MyDay } from './myDay/md';
import { Tasks } from './tasks/tks';
import { Planned } from './planned/plnd';
import { Asigned } from './asigned/asigned';
import { Important } from './important/imp';
import { GridItem } from '@chakra-ui/layout';
import { Route, Switch } from 'react-router';
import { useHistory } from "react-router-dom";
import { Completed } from './completed/compd';
import { UserContext } from '../../hooks/userContext';
import { Login } from '../forms/login';

export const TaskMain = () => {
  const history = useHistory();
  const { notAuthenticated, loading } = React.useContext(UserContext);
  return (
    <>
      <Login />
      {loading ? null :
        notAuthenticated ? history.push('/login') :
          <GridItem p={5} colSpan={5}>
            <Switch>
              <Route path='/important' component={Important} />
              <Route path='/completed' component={Completed} />
              <Route path='/planned' component={Planned} />
              <Route path='/asigned' component={Asigned} />
              <Route path='/my-day' component={MyDay} />
              <Route path='/tasks' component={Tasks} />
              <Route path='/all' component={All} />
              <Route exact path='/' component={Main} />
            </Switch>
          </GridItem>}
    </>
  )
};