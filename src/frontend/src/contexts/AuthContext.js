import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await authService.isLoggedIn();
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        const user = await authService.getUserInfo();
        setUsername(user.username);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, setIsLoggedIn, setUsername }}
    >
      {children}
    </AuthContext.Provider>
  );
};
