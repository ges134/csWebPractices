import React, { Component, FormEvent } from 'react';
import { FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { FieldProps } from 'formik';

const InputControl = (props: any) => (
  <div>
    <Input
      invalid={!!(props.form.touched[props.field.name] && props.form.errors[props.field.name])}
      {...props.field}
      {...props}
    >
      {props.children}
    </Input>
    {props.form.touched[props.field.name] && props.form.errors[props.field.name] && (
      <FormFeedback>{props.form.errors[props.field.name]}</FormFeedback>
    )}
  </div>
);

export default InputControl;
