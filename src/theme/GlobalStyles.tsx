import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
        },
        'header, footer': {
          flexShrink: 0,
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        },
      }}
    />
  );
};

export default GlobalStyles;
