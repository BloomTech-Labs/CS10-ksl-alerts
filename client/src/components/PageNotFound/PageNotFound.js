import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

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
      <h1>Oh no! Page not found, or you're not signed in.</h1>
      <Button  color="grey" size="massive" onClick={goToHome}>Home</Button>
    </DivStyle>
  );
};

export default PageNotFound;