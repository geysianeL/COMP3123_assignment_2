import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import ListEmployees from './pages/ListEmployees';
import RegisterEmployee from './pages/RegisterEmployee';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/list-employees" element={<ListEmployees />} />
          <Route path="/register-employee" element={<RegisterEmployee />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
