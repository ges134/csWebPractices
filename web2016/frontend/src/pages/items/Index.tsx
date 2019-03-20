import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import NewButton from '../../components/newButton/NewButton';

export default class Index extends Component {
  public render() {
    return (
      <>
        <NewButton link="/items/create" text="New item" />
      </>
    );
  }
}
