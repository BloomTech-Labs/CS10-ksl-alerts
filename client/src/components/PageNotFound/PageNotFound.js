import React from 'react';
import styled from 'styled-components';
import { Button, Header } from 'semantic-ui-react';

const DivStyle = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
`;

const PageNotFound = (props) => {
  const goToHome = () => {
    props.history.push('/');
  }

  return (
    <DivStyle>
      <Header as='h1'>Oh no! Page not found, or you're not signed in.</Header>
      <Button  primary size="massive" onClick={goToHome}>Home</Button>
    </DivStyle>
  );
};

export default PageNotFound;