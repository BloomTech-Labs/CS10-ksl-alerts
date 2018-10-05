import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './ListingCard.css';

import styled from 'styled-components';

const ListingCardStyled = styled.div`
  display: inline-block;
  padding: 16px;
  text-align: center;
  margin: 16px;
  border: 1px solid black;
  height: 400px;
  width: 400px;
`;

const ListingImgStyled = styled.img`
  width: 100px;
`;

const ListingCard = props => {
  return (
    <Card
      className="ListingCard"
      image={`https://${props.listing.photo.slice(2)}`}
      header={props.listing.title}
      extra={`Created On: ${props.listing.createTime.slice(0, 10)}`}
      href={`http://classifieds.ksl.com/listing/${props.listing.id}`}
      raised={true}
      meta={
        <div>
          <p>${props.listing.price.toFixed(2)}</p>
          <p>City: {props.listing.city}</p>
        </div>
      }
    />
  );
};

export default ListingCard;
