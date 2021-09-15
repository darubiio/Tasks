import React from 'react';

import { Main } from './main';
import { All } from './todo/all';
import { MyDay } from './myDay/md';
import { Tasks } from './tasks/tks';
import { Login } from '../forms/login';
import { Planned } from './planned/plnd';
import { Asigned } from './asigned/asigned';
import { Important } from './important/imp';
import { Route, Switch } from 'react-router';
import { Completed } from './completed/compd';
import { PrivateRoute } from '../private_route/privateRoute';

export const TaskMain = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/important' children={<Important />} />
      <PrivateRoute path='/completed' children={<Completed />} />
      <PrivateRoute path='/planned' children={<Planned />} />
      <PrivateRoute path='/asigned' children={<Asigned />} />
      <PrivateRoute path='/my-day' children={<MyDay />} />
      <PrivateRoute path='/tasks' children={<Tasks />} />
      <PrivateRoute path='/all' children={<All />} />
      <PrivateRoute path='/' children={<Main />} />
    </Switch>
  )
};