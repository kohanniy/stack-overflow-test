import { Main, ContainerStyled } from './Styles';
import { LoginLayoutProps } from './Types';

const LoginLayout = (props: LoginLayoutProps) => {
  const { children } = props;

  return (
    <Main component='main'>
      <ContainerStyled maxWidth='lg' component='section'>
        {children}
      </ContainerStyled>
    </Main>
  );
};

export default LoginLayout;
