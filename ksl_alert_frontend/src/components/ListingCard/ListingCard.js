import React from 'react';
import { Card } from 'semantic-ui-react';

const listingCard = (props) => {
  return (
    <Card>
      <div>
        <p>Price: {props.price}</p>
        <p>City: {props.city}</p>
        <p>Created On: {props.createdOn}</p>
        <img src={`https://${props.photo.slice(2)}`} />
      </div>
    </Card>
  );
}

export default listingCard;
