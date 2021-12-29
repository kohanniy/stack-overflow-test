import { ListItem, ListItemProps, Paper, PaperProps } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const PaperStyled = styled(Paper)<PaperProps>(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.common.black, 0.5)}`,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(1),
  borderRadius: '10px',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1)
  }
}));

export const AnswerStyled = styled(ListItem)<ListItemProps>(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  paddingLeft: 0,
  paddingRight: 0,
}));