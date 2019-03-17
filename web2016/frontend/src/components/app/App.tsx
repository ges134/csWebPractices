import React, { Component, Fragment } from 'react';
import ParamViewer from '../paramViewer/ParamViewer';
import logo from './logo.svg';
import './App.css';
import Layout from '../layout/Layout';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  public render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={this.home} />
            <Route exact={true} path="/auctions" component={this.auctions} />
            <Route exact={true} path="/items" component={this.items} />
            <Route exact={true} path="/purchases" component={this.purchases} />
            <Route exact={true} path="/profile" component={this.profile} />
            <Route exact={true} path="/logout" component={this.logout} />
            <Route exact={true} path="/login" component={this.login} />
            <Route exact={true} path="/signup" component={this.signup} />
          </Switch>
        </Layout>
      </Fragment>
    );
  }

  private home = () => <Fragment>Home</Fragment>;
  private auctions = () => <Fragment>Auctions</Fragment>;
  private items = () => <Fragment>items</Fragment>;
  private purchases = () => <Fragment>Purchases</Fragment>;
  private profile = () => <Fragment>Profile</Fragment>;
  private logout = () => <Fragment>Logout</Fragment>;
  private login = () => <Fragment>Logout</Fragment>;
  private signup = () => <Fragment>Signup</Fragment>;
}
