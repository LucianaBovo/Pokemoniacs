import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import './AuthBox.css';

const AuthBox = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="auth-box">
      {isAuthenticated
        ? <div className="logged-box">
            <div>{user.given_name}</div>
            <LogoutButton />
          </div>
        : <div className="unlogged-box">
            <LoginButton />
          </div>
      }
    </div>
  );
}

export default AuthBox;