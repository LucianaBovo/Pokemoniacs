import React from 'react';
import AuthBox from '../authorization/AuthBox';

import './Header.css';

const Header = () => {

  return (
    <div className="header">
        <div><h2>Pokemoniacs</h2></div>
        <AuthBox />
    </div>
  )
}

export default Header;