import React from 'react';
import ReactDOM from 'react-dom';
import './localization';
import ProvidersApp from './ProvidersApp';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ProvidersApp>
      <App />
    </ProvidersApp>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
