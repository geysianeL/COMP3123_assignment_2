import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import ListEmployees from './pages/ListEmployees';
import RegisterEmployee from './pages/RegisterEmployee';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route
            path="/list-employees"
            element={<ProtectedRoute element={ListEmployees} />}
          />
          <Route
            path="/register-employee"
            element={<ProtectedRoute element={RegisterEmployee} />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
