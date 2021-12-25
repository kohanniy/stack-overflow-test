import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedLayout from './layouts/ProtectedLayout';
import GeneralLayout from './layouts/GeneralLayout';
import QuestionsPage from './pages/Questions';
import NotFound from './pages/NotFound';
import LoginPage from './pages/Login';
import { useAppDispatch } from './app/hooks';
import { login, logout } from './slices/authenticationSlice';
import { ACCESS_TOKEN_KEY, pathnames } from './utils/constants';
import { IAccessToken, LocationState } from './utils/types';


// import { Counter } from './features/counter/Counter';

function App() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as LocationState)?.from?.pathname || pathnames.home;

  const handleLogin = ({ access_token: token }: IAccessToken) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    dispatch(login());
    navigate(from, { replace: true });
  };

  const handleLogout = () => {
    navigate(pathnames.login);
    dispatch(logout());
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  };

  // checking for an access token
  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const path = location.pathname;

    if (accessToken) {
      dispatch(login());
      path === pathnames.login && navigate(pathnames.home);
    }
  }, [dispatch, location.pathname, navigate]);

  const Questions = (
    <ProtectedLayout>
      <QuestionsPage />
    </ProtectedLayout>
  );

  return (
    <Routes>
      <Route path='/' element={<GeneralLayout onLogoutButtonClick={handleLogout} />}>
        <Route index element={Questions} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path='/login' element={<LoginPage onSuccess={handleLogin} />} />
    </Routes>
    // <div className='App'>
    //   <header className='App-header'>
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className='App-link'
    //         href='https://reactjs.org/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className='App-link'
    //         href='https://redux.js.org/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className='App-link'
    //         href='https://redux-toolkit.js.org/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className='App-link'
    //         href='https://react-redux.js.org/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
