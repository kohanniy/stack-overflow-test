import { Paper } from '@mui/material';
import { styled, alpha, Theme } from '@mui/material/styles';
import { PaperStyledProps } from './Types';

export const PaperStyled = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'error',
})<PaperStyledProps>(({ error, theme }) => ({
  padding: theme.spacing(4),
  gap: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: `1px solid ${alpha(theme.palette.text.primary, 0.4)}`,
  ...(error &&
  {
    border: `1px solid ${theme.palette.error.light}`
  }),

  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  }
}));

export const typographyStyles = (error: boolean, theme: Theme) => ({
  whiteSpace: 'pre-line',
  color: error ? theme.palette.error.main : 'inherit',
}) as const;