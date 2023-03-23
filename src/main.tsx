import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App } from './components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer
      position='bottom-center'
      hideProgressBar
      theme='colored'
      pauseOnHover={false}
    />
    <App />
  </React.StrictMode>,
);
