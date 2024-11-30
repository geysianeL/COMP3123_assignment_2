import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import tokenService from '../services/tokenService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.login(email, password);
      tokenService.setToken(data.token);
      navigate('/list-employees');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate('/create-user');
  };

  return (
    <Form onSubmit={handleSubmit} className="m-1">
      <h1>Login</h1>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="mt-3 me-2">
        Login
      </Button>
      <Button
        variant="outline-secondary"
        type="button"
        className="mt-3"
        onClick={handleCreateAccount}
      >
        Create Account
      </Button>
    </Form>
  );
};

export default Login;
