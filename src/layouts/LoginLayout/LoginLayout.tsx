import { ChildrenType } from '../../utils/types';
import { Main, ContainerStyled } from './Styles';

const LoginLayout = (props: ChildrenType) => {
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
