import { Typography, ListItem } from '@mui/material';

export const PTitleComponent = ({ children }: any) => (
  <Typography sx={{ wordWrap: 'break-word' }}>{children[0]}</Typography>
);

export const PDescComponent = ({ children }: any) => (
  <Typography variant='body2' sx={{ wordWrap: 'break-word' }}>
    {children[0]}
  </Typography>
);

export const LiComponent = ({ children }: any) => (
  <ListItem sx={(theme) => ({ ...theme.typography.body2 })}>{children[0]}</ListItem>
);

