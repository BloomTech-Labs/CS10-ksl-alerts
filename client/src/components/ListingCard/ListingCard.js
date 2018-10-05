import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

import styled from 'styled-components';

const ListingCardStyled = styled.div`
  display: inline-block;
  padding: 16px;
  text-align: center;
  margin: 16px;
  border: 1px solid black;
`;

const ListingImgStyled = styled.img`
  width: 100px;
`;

const ListingCard = (props) => {
  return (
    <ListingCardStyled>
        <p>Price: {props.price}</p>
        <p>City: {props.city}</p>
        <p>Created On: {props.createdOn}</p>
        <ListingImgStyled src={`https://${props.photo.slice(2)}`} />
    </ListingCardStyled>
  );
}

export default ListingCard;
