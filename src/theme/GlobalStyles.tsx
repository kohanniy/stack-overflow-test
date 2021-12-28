import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <MuiGlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        'header, footer': {
          flexShrink: 0,
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          rowGap: theme.spacing(2)
        },
      }}
    />
  );
};

export default GlobalStyles;
