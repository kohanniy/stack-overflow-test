import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedLayout from './layouts/ProtectedLayout';
import GeneralLayout from './layouts/GeneralLayout';
import QuestionsPage from './pages/Questions';
import AnswersPage from './pages/Answers';
import NotFound from './pages/NotFound';
import LoginPage from './pages/Login';
import { useAppDispatch } from './app/hooks';
import { login, logout } from './app/slices/authenticationSlice';
import { ACCESS_TOKEN_KEY, PAGE_SIZE_KEY, pathnames } from './utils/constants';
import { IAccessToken, LocationState } from './utils/types';

function App() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const stateFrom = (location.state as LocationState)?.from;

  const from = `${stateFrom?.pathname}${stateFrom?.search}` || pathnames.home;

  const handleLogin = ({ access_token: token }: IAccessToken) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    dispatch(login());
    navigate(from, { replace: true });
  };

  const handleLogout = () => {
    navigate(pathnames.login);
    dispatch(logout());
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(PAGE_SIZE_KEY);
  };

  // checking for an access token
  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const path = location.pathname;
    const search = location.search;

    if (accessToken) {
      dispatch(login());
      path === pathnames.login ? navigate(pathnames.home) : navigate(`${path}${search}`);
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
              <AnswersPage />
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
