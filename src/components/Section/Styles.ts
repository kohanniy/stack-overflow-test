import { Container, ContainerProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerStyled = styled(Container)<ContainerProps<'section', { component: 'section' }>>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  rowGap: theme.spacing(3),
}));