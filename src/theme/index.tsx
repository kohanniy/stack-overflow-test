import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';
import GlobalStyles from './GlobalStyles';

type MuiThemeProps = {
  children: ReactNode | ReactNode[];
};

const theme = createTheme(
  {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
    palette: {
      text: {
        primary: '#000',
      },
    },
  },
  ruRU
);

const MuiThemeProvider = ({ children }: MuiThemeProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;
