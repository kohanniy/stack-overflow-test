import { List, ListProps, ListItem, ListItemProps } from '@mui/material';
import { styled, alpha, Theme } from '@mui/material/styles';

export const ListStyled = styled(List)<ListProps>({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '10px'
});

export const ListItemStyled = styled(ListItem)<ListItemProps>(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.common.black, 0.4)}`,
  borderRadius: '10px',
  padding: 0,
  transition: theme.transitions.create('opacity'),

  '@media (hover: hover)': {
    '&:hover': {
      opacity: 0.8,
    },
  }
}));

export const linkStyles = (theme: Theme) => ({
  padding: '8px 16px',
  width: '100%',
});