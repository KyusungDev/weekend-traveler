import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App';
import AppProvider from 'Contexts/Lib/AppProvider';
import { EnvProvider, SelectionProvider, GlobalProvider } from 'Contexts';

ReactDOM.render(
  <AppProvider contexts={[EnvProvider, SelectionProvider, GlobalProvider]}>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
