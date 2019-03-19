import React, { Component, Fragment } from 'react';
import ItemForm, { TypeOfSale } from '../../forms/ItemForm';
import axios from 'axios';
import { Redirect } from 'react-router';

// TODO: picture
interface IState {
  name: string;
  description: string;
  price: number;
  type: TypeOfSale;
  isSucces: boolean;
  duration: number; // in days
  [key: string]: string | number | TypeOfSale | boolean;
}

export default class Create extends Component<any, IState> {
  public constructor() {
    super({});

    this.state = {
      name: '',
      description: '',
      price: 0,
      type: TypeOfSale.bid,
      isSucces: false,
      duration: 0,
    };
  }

  public onChange = (value: string, name: string) => {
    this.setState({
      [name]: value,
    });
  };

  public onSubmit = () => {
    axios.post('http://localhost:4200/api/', { ...this.stateWithoutSuccess() }).then(() => {
      this.setState({
        isSuccess: true,
      });
    });
  };

  public render() {
    const formProps = this.stateWithoutSuccess();
    const form = <ItemForm onChange={this.onChange} onSubmit={this.onSubmit} {...formProps} />;
    const redirect = <Redirect to="/items" push={true} />;
    return this.state.isSucces ? redirect : form;
  }

  private stateWithoutSuccess = (): any => {
    const { isSuccess, ...toSend } = this.state;
    return toSend;
  };
}
