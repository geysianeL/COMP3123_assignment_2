import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import tokenService from '../services/tokenService';
import { AuthContext } from '../contexts/AuthContext';
import AlertModal from '../components/AlertModal';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn, setUsername } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.login(email, password);
      tokenService.setToken(data.token);
      const user = await authService.getUserInfo();
      setIsLoggedIn(true);
      setUsername(user.username);
      navigate('/list-employees');
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.message);
      setIsSuccess(false);
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate('/create-user');
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="m-1">
        <h1>Login</h1>
        <Form.Group controlId="formEmail">
          <Form.Label>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>
            <FontAwesomeIcon icon={faLock} /> Password
          </Form.Label>
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
      <AlertModal
        show={showModal}
        handleClose={handleClose}
        message={message}
        isSuccess={isSuccess}
      />
    </>
  );
};

export default Login;
