import { Box, BoxProps, Container, ContainerProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Main = styled(Box)<BoxProps>({
  display: 'flex',
  flexGrow: 1,
});

export const ContainerStyled = styled(Container)<ContainerProps<'section', { component: 'section' }>>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
});