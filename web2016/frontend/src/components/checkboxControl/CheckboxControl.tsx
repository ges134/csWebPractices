import React, { Component, FormEvent } from 'react';
import { FormGroup, Label, Input, Col, FormText } from 'reactstrap';

interface IProps {
  labelText: string;
  name: string;
  helperText?: string;
  onChange: (value: string, name: string) => void;
  value: boolean;
}

export default class CheckboxControl extends Component<IInputControlProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  onChange = (e: FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    this.props.onChange(value, name);
  };

  public render() {
    return (
      <FormGroup check={true} row={true}>
        <Label check={true}>
          <Input
            type="checkbox"
            name={this.props.name}
            onChange={this.onChange}
            value={this.props.value}
          />{' '}
          {this.props.labelText}
        </Label>
        {this.props.helperText && <FormText>{this.props.helperText}</FormText>}
      </FormGroup>
    );
  }
}
