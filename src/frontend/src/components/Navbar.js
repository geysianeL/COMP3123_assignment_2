import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import tokenService from '../services/tokenService';

const Navigation = () => {
  const { isLoggedIn, username, setIsLoggedIn, setUsername } =
    useContext(AuthContext);

  const handleLogout = async () => {
    await tokenService.removeToken();
    setIsLoggedIn(false);
    setUsername('');
    window.location.href = '/login';
  };

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Navbar.Brand href="/">Employee Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isLoggedIn && (
            <LinkContainer to="/list-employees">
              <Nav.Link>List Employees</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <>
              <Nav.Link>{username}</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
