import React from 'react';
import ReactDOM from 'react-dom';
import './include/bootstrap';
import 'font-awesome/css/font-awesome.min.css'
import "./portfolio.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
