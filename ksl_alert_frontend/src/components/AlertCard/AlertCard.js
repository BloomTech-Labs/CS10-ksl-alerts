import React, { Component } from "react";

const AlertCard = props => {
  return (
    <div>
      <p>Title: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Category: {props.category}</p>
    </div>
  );
};

export default AlertCard;
