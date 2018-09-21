import React, { Component } from 'react';
import AlertDetail from '../AlertDetail/AlertDetail';

// receiving query props from AlertFeed
const AlertCard = props => {
  return (
    <div>
      <h4>Query: {props.query.title}</h4>
      <AlertDetail title={props.query.title} url={props.query.url} />
    </div>
  );
};

export default AlertCard;
