import React from 'react';
import AuthBox from '../authorization/AuthBox';
import PlaceAd from '../authorization/PlaceAdButton';
// import ChatButton from '../authorization/ChatButton';

import './Header.css';

const Header = () => {

  return (
    <div className="header">
        <div><h2>Pokemoniacs</h2></div>
        {/* <ChatButton /> */}
        <PlaceAd/>
        <AuthBox />

    </div>
  )
}

export default Header;