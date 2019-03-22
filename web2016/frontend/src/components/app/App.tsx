import React, { Component, Fragment } from 'react';
import ParamViewer from '../paramViewer/ParamViewer';
import logo from './logo.svg';
import './App.css';
import Layout from '../layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Items from '../../pages/items/Items';

export default class App extends Component {
  public render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={this.home} />
            <Route path="/auctions" component={this.auctions} />
            <Route path="/items" component={Items} />
            <Route path="/purchases" component={this.purchases} />
            <Route path="/profile" component={this.profile} />
            <Route path="/logout" component={this.logout} />
            <Route path="/login" component={this.login} />
            <Route path="/signup" component={this.signup} />
            <Route path="*" component={this.notFound} />
          </Switch>
        </Layout>
      </>
    );
  }

  private home = () => <Fragment>Home</Fragment>;
  private auctions = () => <Fragment>Auctions</Fragment>;
  private purchases = () => <Fragment>Purchases</Fragment>;
  private profile = () => <Fragment>Profile</Fragment>;
  private logout = () => <Fragment>Logout</Fragment>;
  private login = () => <Fragment>Logout</Fragment>;
  private signup = () => <Fragment>Signup</Fragment>;
  private notFound = () => <Fragment>not Found</Fragment>;
}
