import React, { Component } from 'react';

interface ParamViewerProps {
  param : string;
}

const ParamViewer = (props : ParamViewerProps) => (
  <div>{props.param}</div>
);

export default ParamViewer;