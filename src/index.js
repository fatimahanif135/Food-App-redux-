import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from'react-redux';
import store from './store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>

  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
</Provider>
);



