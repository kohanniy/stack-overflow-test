import { Button, ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LogoutButton = (props: ButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button variant='outlined' {...props}>
      {t('logoutButtonText')}
    </Button>
  );
};

export default LogoutButton;
