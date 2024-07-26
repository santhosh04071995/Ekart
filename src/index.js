import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyValueReducer from './redux/MyValue';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


const mystore = configureStore({       
  reducer : {
  ourvalue: MyValueReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={mystore}>
    <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
