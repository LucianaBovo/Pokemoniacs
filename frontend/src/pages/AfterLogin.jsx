import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as UsersApi from '../api/UsersApi';

const AfterLogin = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const doStuff = async () => {
      if (isAuthenticated) {
        await UsersApi.createUserIfNotExist(user);
        navigate('/');
      }
    }

    doStuff();
  }, [isAuthenticated, user, navigate]);

  return (
    <div />
  )
}

export default AfterLogin;