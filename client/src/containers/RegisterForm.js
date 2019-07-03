import React, { Component } from 'react';

import { Form, Input, Button } from '../components';

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.register({
      variables: {
        email: this.state.email,
        password: this.state.password,
      },
    });
  };

  render() {
    return (
      <Form
        style={{ maxWidth: '400px' }}
        onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Label htmlFor="email">E-mail</Form.Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type="submit">Create Account</Button>
      </Form>
    );
  }
}

export default RegisterForm;
