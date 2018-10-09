import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';
import './ModalToggle.css';

const ModalToggle = props => {
  let toggle = props.toggle;

  return (
    <div className={toggle ? 'modal-wrapper' : 'hidden'}>
      {/* <h4 className="modal-header">Welcome to KSL Alert</h4> */}
      <Grid className="GridWrap">
        <Grid.Column className="how-to" width={8}>
          <Header style={{ marginTop: '2rem' }}>How it works</Header>
          <Grid.Row className="how-to-row">
            <Grid.Column>
              <Icon name="add user" size="big" color="blue" />
            </Grid.Column>
            <Grid.Column style={{ marginLeft: '1rem' }}>
              Create an account
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="how-to-row">
            <Grid.Column>
              <Icon name="share" size="big" color="blue" />
            </Grid.Column>
            <Grid.Column style={{ marginLeft: '1rem' }}>
              Go to "Create Alert" page
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="how-to-row">
            <Grid.Column>
              <Icon name="write" size="big" color="blue" />
            </Grid.Column>
            <Grid.Column style={{ marginLeft: '1rem' }}>
              Create your search title
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="how-to-row">
            <Grid.Column>
              <Icon name="copy" size="big" color="blue" />
            </Grid.Column>
            <Grid.Column style={{ marginLeft: '1rem' }}>
              Add URL link from your{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://classifieds.ksl.com/"
              >
                KSL
              </a>{' '}
              search
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column className="action-field" width={8}>
          <Header style={{ marginTop: '2rem' }}>Join Us</Header>
          <Button
            size="medium"
            style={{ backgroundColor: '#4EA3CE', color: 'white' }}
            onClick={() => props.history.push('/signUp')}
          >
            Sign Up
          </Button>
          <p style={{ color: 'black', marginTop: '2rem' }}>
            Already have an account?
            <span className="sign-in-link">
              <Link to="/signIn">Sign In</Link>
            </span>
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ModalToggle;
