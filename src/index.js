import React from "react";
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import store from './component2/store/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

  </BrowserRouter>
);



