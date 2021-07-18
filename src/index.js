import React from 'react';
import ReactDOM from 'react-dom';
import GloblalStyles from './styles/globalStyle';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GloblalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

