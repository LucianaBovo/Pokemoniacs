import './App.css';
import SearchForm from './components/SeachForm';
// import LoginButton from './components/authorization/LoginButton';
// import LogoutButton from './components/authorization/LogoutButton';
// import Profile from './components/authorization/Profile';
// import MainPage from './components/authorization/MainPage';
// import Layout from './components/layout/Layout';
// import Chat from './components/Chat';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AfterLogin from './pages/AfterLogin';
import CardDetail from './pages/CardDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/afterlogin",
      element: <AfterLogin />,
    },
    {
      path: "/cards/:id",
      element: <CardDetail />,
    },
    {
      path: "/searchform",
      element: <SearchForm />
    },
    // {
    //   path: '/chat',
    //   element: <Chat />
    // }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;