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
      <PrivateRoute path='/tab/:tab' children={<TabPanel />} />
      <Route path='/signup' children={<SignUp/>} />
      <Route path='/login' children={<Login/>} />
      <PrivateRoute path='/' children={<Main />} />
    </Switch>
  )
};