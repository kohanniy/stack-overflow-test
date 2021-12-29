import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { styled } from '@mui/material/styles';

export const Form = styled('form')<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: theme.spacing(1.5)
}));