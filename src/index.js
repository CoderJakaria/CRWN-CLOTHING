import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistore} from './redux/store';



ReactDOM.render(<Provider store={store}>
    <BrowserRouter basename="/JKRX_CLOTHING">
      <PersistGate persistor={persistore}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
