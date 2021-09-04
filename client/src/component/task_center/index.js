import React from 'react';
import { Everything } from './all_taskslists/everyth';
import { MyDay } from './my_day/myDay';
import { Switch, Route } from "react-router-dom";
import { Completed } from './completed/comp';
import { Important } from './important/imp';
import { Planned } from './planned/pland';

export const TaskCenter = () => {
  return (
    <Switch>

        <Route path="/planned" component={Planned} />
        <Route path="/imp" component={Important} />
        <Route path="/comp" component={Completed} />
        <Route path="/myday" component={MyDay} />
        <Route path="/" component={Everything} />
      
    </Switch>
  )
};