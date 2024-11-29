import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import ListEmployees from './pages/ListEmployees';
import RegisterEmployee from './pages/RegisterEmployee';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/list-employees" element={<ListEmployees />} />
          <Route path="/register-employee" element={<RegisterEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
