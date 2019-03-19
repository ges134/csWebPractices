import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './Index';
import Create from './Create';

const Items = () => (
  <Switch>
    <Route exact={true} path="/items" component={Index} />
    <Route exact={true} path="/items/create" component={Create} />
  </Switch>
);

export default Items;
