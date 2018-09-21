import React, { Component } from "react";
import AlertDetail from '../AlertDetail/AlertDetail';

const AlertCard = props => {
  return (
    <div>
      <p>Title: {props.query.title}</p>
      <AlertDetail
        title={props.query.title}
        url={props.query.url}
      />
    </div>
  );
};

export default AlertCard;
