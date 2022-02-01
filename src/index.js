import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ValueProvider from './context/ValueProvider';


ReactDOM.render(
  <React.StrictMode>
    <ValueProvider>
    <App />
    </ValueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
