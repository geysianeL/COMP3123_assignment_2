import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faSignInAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import tokenService from '../services/tokenService';

const Navigation = () => {
  const { isLoggedIn, username, setIsLoggedIn, setUsername } =
    useContext(AuthContext);

  const handleLogout = async () => {
    tokenService.removeToken();
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
              <Nav.Link>
                <FontAwesomeIcon icon={faUsers} /> List Employees
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <div className="text-right">
              <div>Hi {username}!</div>
              <Nav.Link onClick={handleLogout} size="sm">
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </Nav.Link>
            </div>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
