import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/header.css'
import './styles/subHeader.css'
import './styles/loader.css'
import './styles/modal.css'
import './styles/cart.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Provider store={store}>
   <App></App>
   </Provider>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
