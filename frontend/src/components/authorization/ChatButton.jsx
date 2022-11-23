import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const PlaceAdButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect({ redirectUri: 'http://localhost:3000/chat' })}>Chat</button>;
}

export default PlaceAdButton