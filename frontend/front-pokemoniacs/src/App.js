import './App.css';
import SearchForm from './components/SeachForm';
import LoginButton from './components/authorization/LoginButton';
import LogoutButton from './components/authorization/LogoutButton';
import Profile from './components/authorization/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      {isAuthenticated && (<SearchForm />)}
    </div>
  );
}

export default App;