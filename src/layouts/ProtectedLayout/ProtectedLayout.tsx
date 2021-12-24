import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../slices/userSlice';
import { ProtectedLayoutProps } from './Types';

const ProtectedLayout = (props: ProtectedLayoutProps) => {
  const { children } = props;

  const user = useAppSelector(selectUser);

  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default ProtectedLayout;
