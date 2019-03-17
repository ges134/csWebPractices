import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

interface INewButtonProps {
  link: string;
  text: string;
}

const NewButton = (props: INewButtonProps) => (
  <Fragment>
    <Button color="primary">
      <Link to={props.link}>{props.text}</Link>
    </Button>
  </Fragment>
);

export default NewButton;
