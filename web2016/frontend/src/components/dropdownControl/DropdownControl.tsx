import React, { Component, FormEvent } from 'react';
import { FormGroup, Label, Input, Col, FormText } from 'reactstrap';

interface IProps {
  labelText: string;
  name: string;
  placeholder: string;
  helperText?: string;
  onChange: (value: string, name: string) => void;
  value: string;
  options: ISelectProps[];
}

interface ISelectProps {
  value: string;
  label: string;
}

export default class InputControl extends Component<IInputControlProps, any> {
  constructor(props: IProps) {
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
            type="select"
            placeholder={this.props.placeholder}
            onChange={this.onChange}
            value={this.props.value}
          >
            {this.props.options.map((option: ISelectProps) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Input>
          {this.props.helperText && <FormText>{this.props.helperText}</FormText>}
        </Col>
      </FormGroup>
    );
  }
}
