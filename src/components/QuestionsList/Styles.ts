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
  columnGap: theme.spacing(2),
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
  })
}));