import React from 'react';
import ReactDOM from 'react-dom/client';
import "./sass/main.scss"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { PopUpProvider } from './popUp.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   
      <App />
   
    </BrowserRouter>
  </React.StrictMode>
);


