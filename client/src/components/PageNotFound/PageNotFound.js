import React from 'react';
import styled from 'styled-components';
import { Button, Header } from 'semantic-ui-react';

const DivStyle = styled.div`
  margin: 100px auto;
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
      <Header as='h1'>Oh no!</Header>
      <Header>Sorry, an error occured. Requested page not found.<br/> Please sign in and try again.</Header>
      <Button name='home'  color='blue' size='big' onClick={goToHome}>Take Me Home</Button>
    </DivStyle>
  );
};

export default PageNotFound;