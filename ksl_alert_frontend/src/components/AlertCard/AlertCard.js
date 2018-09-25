import React from 'react';
import AlertListings from '../AlertListings/AlertListings.js';

// receiving query props from AlertFeed
const AlertCard = props => {
  return (
    <div>
      <h4>Query: {props.query.title}</h4>
      <AlertListings url={props.query.url} />
    </div>
  );
};

export default AlertCard;
