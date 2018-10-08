import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Divider,
  Input,
  Form,
  Header
} from "semantic-ui-react";
import "./CreateAlert.css";

export default class CreateAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/saveQuery`, {
        ...this.state,
        id: this.props.id
      })
      .then(updatedUser => {
        const updatedQueries = updatedUser.data.queries;
        this.props.updateQueries(updatedQueries);
        this.props.history.push("/feed");
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container className="create-wrapper" fluid>
        <div
          className="form-wrapper"
          style={{
            /* border: "solid 2px #E06F5A" */
            background: "rgba(255,255,255,.02)"
          }}
        >
          <Header as="h1" style={{ color: "#436386", fontSize: "2.5rem" }}>
            Create a new alert
          </Header>
          <Divider inverted />
          <Form className="signin-form">
            <Form.Field className="form-field">
              <Input
                type="text"
                name="title"
                placeholder="Alert Title"
                value={this.state.title}
                onChange={this.handleInput}
                style={{
                  border: "solid 2px #E06F5A",
                  borderRadius: ".28571429rem",
                  width: "400px"
                }}
              />
            </Form.Field>
            <Form.Field className="form-field">
              <Input
                type="text"
                name="url"
                placeholder="Query String Link"
                value={this.state.url}
                onChange={this.handleInput}
                style={{
                  border: "solid 2px #E06F5A",
                  borderRadius: ".28571429rem",
                  width: "400px"
                }}
              />
            </Form.Field>
            <Button
              primary
              size="large"
              style={{ backgroundColor: "#E06F5A" }}
              onClick={this.handleSubmit}
            >
              Create Alert
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}
