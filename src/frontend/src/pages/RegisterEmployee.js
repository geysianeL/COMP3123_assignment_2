import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import employeeService from '../services/employeeService';

const RegisterEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await employeeService.registerEmployee(
        name,
        email,
        position,
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Register Employee</h1>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group controlId="formPosition">
        <Form.Label>Position</Form.Label>
        <Form.Control
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Enter position"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register Employee
      </Button>
    </Form>
  );
};

export default RegisterEmployee;
