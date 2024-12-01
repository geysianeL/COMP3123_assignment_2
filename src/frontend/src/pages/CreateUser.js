import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import authService from '../services/authService';
import AlertModal from '../components/AlertModal';

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.createUser(email, password);
      console.log(data);
    } catch (error) {
      setErrorMessage(error.message);
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Form onSubmit={handleSubmit} className="text-dark">
        <h2>Create User</h2>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit" className="mt-3">
          Create User
        </Button>
      </Form>
      <AlertModal
        show={showModal}
        handleClose={handleClose}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default CreateUser;
