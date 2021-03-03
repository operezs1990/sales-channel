import React from 'react';
import ReactDOM from 'react-dom';
import {AppProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';
import {Provider, Loading} from '@shopify/app-bridge-react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LinkWrapper from './components/Link'
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const config = { apiKey: '82fd034f42500193055a4ff648def6ed', shopOrigin: 'orlandoshopstore.myshopify.com/', forceRedirect: true };

ReactDOM.render(
  <Provider config={config}>
    <BrowserRouter>
      <AppProvider i18n={enTranslations} linkComponent={LinkWrapper}>
        <Routes />
        <App />
      </AppProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
