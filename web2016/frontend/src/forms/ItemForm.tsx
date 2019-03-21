import React, { Component } from 'react';
import InputControl from '../components/inputControl/InputControl';
import DropdownControl from '../components/dropdownControl/DropdownControl';
import Button from 'reactstrap/lib/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Label } from 'reactstrap';
import * as Yup from 'yup';
import FormGroup from 'reactstrap/lib/FormGroup';

export enum TypeOfSale {
  bid = 'bid',
  fixed = 'fixedPrice',
}

interface IProps {
  name: string;
  description: string;
  price: string;
  type: TypeOfSale;
  duration: string;
  onChange: (value: string, name: string) => void;
  onSubmit: () => void;
}

export default class ItemForm extends Component<IProps, any> {
  public render() {
    const duration = (
      <>
        <Label for="duration">Duration of auction</Label>
        <Field name="duration" type="number" component={InputControl} />
      </>
    );

    const price = (
      <>
        <Label for="price">Type of transaction</Label>
        <Field name="price" type="number" component={InputControl} />
      </>
    );

    const { onChange, onSubmit, children, ...formValues } = this.props;

    const validate = Yup.object().shape({
      name: Yup.string().required('this field is required'),
      description: Yup.string().required('this field is required'),
      type: Yup.mixed()
        .oneOf([TypeOfSale.bid, TypeOfSale.fixed])
        .required('this field is required'),
      duration: Yup.number(),
      price: Yup.number(),
    });

    return (
      <Formik initialValues={formValues} validationSchema={validate} onSubmit={this.props.onSubmit}>
        <Form>
          <FormGroup>
            <Label for="name">Name of the item</Label>
            <Field name="name" type="text" component={InputControl} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Field name="description" type="text" component={InputControl} />
          </FormGroup>
          <FormGroup>
            <Label for="type">Type of transaction</Label>
            <Field name="type" type="select" component={InputControl}>
              <option value={TypeOfSale.bid}>Bid</option>
              <option value={TypeOfSale.fixed}>Fixed price</option>
            </Field>
          </FormGroup>
          {this.props.type === TypeOfSale.bid ? duration : price}
          <Button color="primary" type="submit" className="mt-3">
            Send
          </Button>
        </Form>
      </Formik>
    );
  }
}
