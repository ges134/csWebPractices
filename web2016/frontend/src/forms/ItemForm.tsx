import React, { Component } from 'react';
import InputControl from '../components/inputControl/InputControl';
import DropdownControl from '../components/dropdownControl/DropdownControl';
import Button from 'reactstrap/lib/Button';

export enum TypeOfSale {
  bid = 'bid',
  fixed = 'fixedPrice',
}

interface IProps {
  name: string;
  description: string;
  price: string;
  isBid: boolean;
  onChange: (value: string, name: string) => void;
  onSubmit: () => void;
}

const ItemForm = (props: IProps) => {
  const options = [
    {
      value: TypeOfSale.bid,
      label: 'bid',
    },
    {
      value: TypeOfSale.fixed,
      label: 'fixed price',
    },
  ];
  return (
    <>
      <InputControl
        labelText="Name"
        name="name"
        inputType="text"
        placeholder="Name of the item"
        onChange={props.onChange}
        value={props.name}
      />
      <InputControl
        labelText="Description"
        name="description"
        inputType="textarea"
        placeholder="Description"
        onChange={props.onChange}
        value={props.description}
      />
      <InputControl
        labelText="Price"
        name="price"
        inputType="number"
        placeholder="Price of the item"
        onChange={props.onChange}
        value={props.price}
      />
      <DropdownControl
        labelText="This item will be bided"
        name="isBid"
        helperText="By not ticking this, your item will be at fixed price"
        onChange={props.onChange}
        value={props.isBid}
        options={options}
      />
      {/* FIXME: wrap this in component */}
      <Button color="primary" onClick={props.onSubmit}>
        Send
      </Button>
    </>
  );
};

export default ItemForm;
