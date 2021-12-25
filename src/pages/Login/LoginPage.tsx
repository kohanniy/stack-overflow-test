import { useState } from 'react';
import { Typography, Button, useTheme } from '@mui/material';
import OAuth2Login from 'react-simple-oauth2-login';
import { useTranslation } from 'react-i18next';
import { PaperStyled, typographyStyles } from './Styles';
import { AuthButtonProps, IAuthError, LoginPageProps } from './Types';
import LoginLayout from '../../layouts/LoginLayout';
import { StackOverflowIcon } from '../../assets/Icons';
import { AUTH_URL, CLIENT_ID, REDIRECT_URI, RES_TYPE, SCOPE } from '../../utils/constants';

const renderAuthButton =
  (error: IAuthError | null) =>
  ({ buttonText, ...props }: AuthButtonProps) =>
    (
      <Button variant='contained' color={error ? 'error' : 'primary'} {...props}>
        {buttonText}
      </Button>
    );

const LoginPage = (props: LoginPageProps) => {
  const { onSuccess } = props;

  const theme = useTheme();

  const { t } = useTranslation();

  const [error, setError] = useState<IAuthError | null>(null);

  const oAuth2Config = {
    authorizationUrl: AUTH_URL,
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    responseType: RES_TYPE,
    buttonText: t('authButtonText'),
    onSuccess,
    onFailure: setError,
    scope: SCOPE,
    render: renderAuthButton(error),
  };

  return (
    <LoginLayout>
      <PaperStyled error={!!error} elevation={0} variant='outlined'>
        <Typography
          sx={typographyStyles(!!error, theme)}
          align='center'
          component='p'
          variant='body2'
        >
          {error ? error.message : t('loginPageText')}
        </Typography>
        <StackOverflowIcon width={200} />
        <OAuth2Login {...oAuth2Config} />
      </PaperStyled>
    </LoginLayout>
  );
};

export default LoginPage;
