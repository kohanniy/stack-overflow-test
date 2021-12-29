import { List, ListProps, ListItem, ListItemProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TagsStyled = styled(List)<ListProps>(({ theme }) => ({
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