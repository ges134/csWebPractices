import React, { Component, Fragment } from 'react';
import ItemForm, { TypeOfSale } from '../../forms/ItemForm';

// TODO: picture
interface IState {
  name: string;
  description: string;
  price: number;
  type: TypeOfSale;
  [key: string]: string | number | TypeOfSale;
}

export default class Create extends Component<any, IState> {
  public constructor() {
    super({});

    this.state = {
      name: '',
      description: '',
      price: 0,
      type: TypeOfSale.bid,
    };
  }

  public onChange = (value: string, name: string) => {};
}
