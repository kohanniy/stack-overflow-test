import { List, ListProps, ListItem, ListItemProps, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnswerCountContainerProps } from './Types';

export const ListStyled = styled(List)<ListProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
}));

export const ListItemStyled = styled(ListItem)<ListItemProps>(({ theme }) => ({
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  }
}));

export const AnswerCountContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'answerCount',
})<AnswerCountContainerProps>(({ answerCount, theme }) => ({
  borderRadius: '3px',
  alignItems: 'center',
  padding: '7px 10px',
  border: `1px solid ${theme.palette.common.black}`,
  color: theme.palette.common.black,

  ...(answerCount > 0 && {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    borderColor: theme.palette.success.main,
  }),

  [theme.breakpoints.down('sm')]: {
    order: 1,
    width: '100%'
  }
}));

export const Tags = styled(List)<ListProps>(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

export const TagItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
  width: 'auto',
  paddingTop: '8px',
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: '8px'
}))