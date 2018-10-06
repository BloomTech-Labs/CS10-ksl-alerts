import React from 'react';
import { Card, Header } from 'semantic-ui-react';
import './ListingCard.css';

import styled from 'styled-components';
import { inherits } from 'util';

// const ListingCardStyled = styled.div`
//   display: inline-block;
//   padding: 16px;
//   text-align: center;
//   margin: 16px;
//   border: 1px solid black;
//   height: 400px;
//   width: 400px;
// `;

// const ListingImgStyled = styled.img`
//   width: 100px;
// `;

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
          <Header as='p' basic>${props.listing.price.toFixed(2)}</Header>
          <Header as='p' basic>City: {props.listing.city}</Header>
        </div>
      }
      textAlign={'center'}
    />
  );
};

export default ListingCard;
