import React from 'react';

import { Main } from './main';
// import { All } from './todo/all';
// import { MyDay } from './myDay/md';
// import { Tasks } from './tasks/tks';
// import { Planned } from './planned/plnd';
// import { Asigned } from './asigned/asigned';
// import { Important } from './important/imp';
// import { Completed } from './completed/compd';
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
      {/* <PrivateRoute children={<Important />} /> */}
      {/* <PrivateRoute path='/completed' children={<Completed />} /> */}
      {/* <PrivateRoute path='/planned' children={<Planned />} />
      <PrivateRoute path='/asigned' children={<Asigned />} />
      <PrivateRoute path='/my-day' children={<MyDay />} />
      <PrivateRoute path='/tasks' children={<Tasks />} />
      <PrivateRoute path='/all' children={<All />} /> */}
      <PrivateRoute path='/' children={<Main />} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
    </Switch>
  )
};