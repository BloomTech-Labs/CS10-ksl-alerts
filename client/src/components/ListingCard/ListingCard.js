import React from 'react';
import { Card, Header } from 'semantic-ui-react';
import './ListingCard.css';


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
      style={{ fontFamily: 'Karla', textAlign: 'center'}}
    />
  );
};

export default ListingCard;
