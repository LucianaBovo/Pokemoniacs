import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as UsersApi from '../api/UsersApi';
import LogoutButton from '../components/authorization/LogoutButton';

const AfterLogin = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const checkUser = async () => {
      if (isAuthenticated) {
        const userId = await UsersApi.createUserIfNotExist(user);
        window.localStorage.setItem('userId', userId);
        navigate('/');
      }
    }

    checkUser();
  }, [isAuthenticated, user, navigate]);

  return (
    <div />
  )
}

export default AfterLogin;