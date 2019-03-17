import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

const items = () => (
  <Switch>
    <Route exact={true} path="/" component={Index} />
  </Switch>
);
