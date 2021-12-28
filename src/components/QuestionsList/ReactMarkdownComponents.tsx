import { Typography, ListItem, SxProps, Theme } from '@mui/material';

const typographyStyles: SxProps<Theme> = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
};

export const PTitleComponent = ({ children }: any) => (
  <Typography sx={typographyStyles}>{children[0]}</Typography>
);

export const PDescComponent = ({ children }: any) => (
  <Typography variant='body2' sx={typographyStyles}>
    {children[0]}
  </Typography>
);

export const LiComponent = ({ children }: any) => (
  <ListItem sx={{ typography: 'body2' }}>{children ? children[0] : ''}</ListItem>
);

export const CodeComponent = ({ children }: any) => (
  <Typography component='span' variant='body2' sx={typographyStyles}>
    {children[0]}
  </Typography>
);
