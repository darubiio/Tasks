import React from 'react';

import { Redirect, Route, Switch } from 'react-router';
import { Completed } from './completed/compd';
import { Asigned } from './asigned/asigned';
import { Important } from './important/imp';
import { Planned } from './planned/plnd';
import { Tasks } from './tasks/tks';
import { MyDay } from './myDay/md';
import { All } from './todo/all';
import { GridItem } from '@chakra-ui/layout';
import { Main } from './main';
import { UserContext } from '../../hooks/userContext';


export const TaskMain = () => {
  const { error, loading } = React.useContext(UserContext);
  return (
    loading ? '' :
      error ? <Redirect to='/login' /> :
        <GridItem p={5} colSpan={5}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/my-day' component={MyDay} />
            <Route path='/all' component={All} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/planned' component={Planned} />
            <Route path='/asigned' component={Asigned} />
            <Route path='/completed' component={Completed} />
            <Route path='/important' component={Important} />
          </Switch>
        </GridItem>
  )
};