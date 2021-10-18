import React from 'react';

import { Main } from './main';
import { Route, Switch } from 'react-router';
import { List } from './list/list';
import { Login } from '../forms/login';
import { PrivateRoute } from '../private_route/privateRoute';
import { SignUp } from '../../components/forms/registro';
import { TabPanel } from './tab_panel/tabPanel';

export const TaskMain = () => {
  return (
    <Switch>
      <PrivateRoute path='/list/:id' children={<List />} />
      <PrivateRoute path='/:tab' children={<TabPanel />} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/' children={<Main />} />
    </Switch>
  )
};