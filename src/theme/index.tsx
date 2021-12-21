import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

type MuiThemeProps = {
  children: ReactNode | ReactNode[];
};

const theme = createTheme({});

const MuiThemeProvider = ({ children }: MuiThemeProps) => {
  return (
    <StyledEngineProvider injectFirst >
      <ThemeProvider theme= { theme } >
        <CssBaseline />
        { children }
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;