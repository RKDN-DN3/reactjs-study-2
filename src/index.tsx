import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './stores/MainPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <MainPage />
    </BrowserRouter>,
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
