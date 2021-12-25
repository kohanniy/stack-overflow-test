import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectLoggedIn } from '../../app/slices/authenticationSlice';
import { pathnames } from '../../utils/constants';
import { ProtectedLayoutProps } from './Types';

const ProtectedLayout = (props: ProtectedLayoutProps) => {
  const { children } = props;

  const location = useLocation();

  const isLoggedIn = useAppSelector(selectLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={pathnames.login} state={{ from: location }} />;
  }

  return children;
};

export default ProtectedLayout;
