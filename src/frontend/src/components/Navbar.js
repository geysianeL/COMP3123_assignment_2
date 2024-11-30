import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import authService from '../services/authService';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await authService.isLoggedIn();
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Navbar.Brand href="/">Employee Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create-user">
            <Nav.Link>Create User</Nav.Link>
          </LinkContainer>
          {isLoggedIn && (
            <>
              <LinkContainer to="/list-employees">
                <Nav.Link>List Employees</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register-employee">
                <Nav.Link>Register Employee</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
