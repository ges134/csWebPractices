import React, { Component, FormEvent } from 'react';
import { FormGroup, Label, Input, Col, FormText } from 'reactstrap';

/**
 * More restrictive list that says what kind of input is supported by this input control.
 * If all types are supported, this input type will be deprecated and deleted
 */
type InputType = 'email' | 'password' | 'text' | 'textarea' | 'number';

interface IInputControlProps {
  labelText: string;
  name: string;
  inputType: InputType;
  placeholder: string;
  helperText?: string;
  onChange: (value: string, name: string) => void;
  value: string;
}

export default class InputControl extends Component<IInputControlProps, any> {
  constructor(props: IInputControlProps) {
    super(props);
  }

  onChange = (e: FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    this.props.onChange(value, name);
  };

  public render() {
    return (
      <FormGroup row={true}>
        <Label for={this.props.name} md={2}>
          {this.props.labelText}
        </Label>
        <Col md={10}>
          <Input
            name={this.props.name}
            type={this.props.inputType}
            placeholder={this.props.placeholder}
            onChange={this.onChange}
            value={this.props.value}
          />
          {this.props.helperText && <FormText>{this.props.helperText}</FormText>}
        </Col>
      </FormGroup>
    );
  }
}
