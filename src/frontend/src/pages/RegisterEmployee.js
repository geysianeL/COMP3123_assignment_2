import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import employeeService from '../services/employeeService';
import AlertModal from '../components/AlertModal';

const RegisterEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [dateOfJoin, setDateOfJoin] = useState('');
  const [department, setDepartment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await employeeService.registerEmployee(
        firstName,
        lastName,
        email,
        position,
        salary,
        dateOfJoin,
        department,
      );
      navigate('/list-employees');
    } catch (error) {
      setErrorMessage(error.message);
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  const handleback = async (e) => {
    e.preventDefault();
    navigate('/list-employees');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h3>Register Employee</h3>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
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
        <Form.Group controlId="formSalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter salary"
          />
        </Form.Group>
        <Form.Group controlId="formDateOfJoin">
          <Form.Label>Date of Joining</Form.Label>
          <Form.Control
            type="date"
            value={dateOfJoin}
            onChange={(e) => setDateOfJoin(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter department"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit" className="mt-3 me-3">
          Register Employee
        </Button>
        <Button
          variant="outline-secondary"
          type="button"
          className="mt-3"
          onClick={handleback}
        >
          Back
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

export default RegisterEmployee;
