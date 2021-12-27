import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedLayout from './layouts/ProtectedLayout';
import GeneralLayout from './layouts/GeneralLayout';
import QuestionsPage from './pages/Questions';
import Question from './pages/Question';
import NotFound from './pages/NotFound';
import LoginPage from './pages/Login';
import { useAppDispatch } from './app/hooks';
import { login, logout } from './app/slices/authenticationSlice';
import { ACCESS_TOKEN_KEY, pathnames } from './utils/constants';
import { IAccessToken, LocationState } from './utils/types';

// import { Counter } from './features/counter/Counter';

function App() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const from =
    `${(location.state as LocationState)?.from?.pathname}${
      (location.state as LocationState)?.from?.search
    }` || pathnames.home;

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
    const search = location.search;

    if (accessToken) {
      dispatch(login());
      path === pathnames.login
        ? navigate(pathnames.home)
        : navigate(`${path}${search}`);
    }
  }, [dispatch, location.pathname, location.search, navigate]);

  return (
    <Routes>
      <Route path='/' element={<GeneralLayout onLogoutButtonClick={handleLogout} />}>
        <Route
          index
          element={
            <ProtectedLayout>
              <QuestionsPage />
            </ProtectedLayout>
          }
        />
        <Route
          path=':id'
          element={
            <ProtectedLayout>
              <Question />
            </ProtectedLayout>
          }
        />
      </Route>
      <Route path='/login' element={<LoginPage onSuccess={handleLogin} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
