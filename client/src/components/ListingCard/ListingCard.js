import React from 'react';
// import { Card } from 'semantic-ui-react';

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

const ListingCard = (props) => {
  return (
    <ListingCardStyled>
        <p>{props.listing.title}</p>
        <p>Price: ${props.listing.price.toFixed(2)}</p>
        <p>City: {props.listing.city}</p>
        <ListingImgStyled src={`https://${props.listing.photo.slice(2)}`} />
        {/* <p>Description: {props.listing.description}</p> */}
        <p>Created On: {props.listing.createTime.slice(0,10)}</p>
    </ListingCardStyled>
  );
}

export default ListingCard;
