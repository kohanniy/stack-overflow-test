import React from 'react';
import axios from 'axios';
// import { Route, Switch, useLocation, Redirect, useHistory } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import MuiThemeProvider from './theme';
import { Button } from '@mui/material';

function App() {
  const api = async () => {
    try {
      const response = await axios.get('https://stackoverflow.com/oauth/dialog', {
        params: {
          client_id: 22525,
          // redirect_uri: '/',
          // scope: 'write_access',
        },
      });
      console.log(response);
      
    } catch (e) {
      console.log(e);
    }
  };

  // React.useEffect(() => {
  //   const res = async () => await api();
  //   setRes(res);
  // }, []);

  

  // console.log(res);
  

  return (
    <MuiThemeProvider>
      <Button onClick={api}>Войдите</Button>
      <div className='App'>
        <header className='App-header'>
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className='App-link'
              href='https://reactjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              React
            </a>
            <span>, </span>
            <a
              className='App-link'
              href='https://redux.js.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Redux
            </a>
            <span>, </span>
            <a
              className='App-link'
              href='https://redux-toolkit.js.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className='App-link'
              href='https://react-redux.js.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
