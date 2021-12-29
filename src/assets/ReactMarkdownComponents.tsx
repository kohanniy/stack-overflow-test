import { Typography, ListItem, SxProps, Theme } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const typographyStyles: SxProps<Theme> = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
};

const PreStyled = styled('pre')(({ theme }) => ({
  maxHeight: '600px',
  maxWidth: '100%',
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  overflow: 'auto',
  borderRadius: '20px',
  padding: theme.spacing(2),

  '& > code': {
    backgroundColor: 'transparent',
  },
}));

const CodeStyled = styled('code')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.1),
}));

export const PTitleComponent = ({ children }: any) => (
  <Typography sx={typographyStyles}>{children[0]}</Typography>
);

export const PDescComponent = ({ children }: any) => (
  <Typography gutterBottom variant='body2' sx={typographyStyles}>
    {children}
  </Typography>
);

export const LiComponent = ({ children }: any) => (
  <ListItem sx={{ typography: 'body2' }}>{children ? children : ''}</ListItem>
);

export const CodeComponent = ({ children }: any) => (
  <Typography component='span' variant='body2' sx={typographyStyles}>
    {children}
  </Typography>
);

export const CodeAnswersComponent = ({ children }: any) => {
  return <CodeStyled>{children}</CodeStyled>;
};

export const PreStyledComponent = ({ children }: any) => <PreStyled>{children}</PreStyled>;
