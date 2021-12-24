import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from './theme';
import { store } from './app/store';

interface IProps {
  children: ReactNode;
}

const ProvidersApp = (props: IProps) => {
  const { children } = props;

  return (
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default ProvidersApp;
