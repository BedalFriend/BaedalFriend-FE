import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import App from './App';

import store from './redux/config/ConfigStore';
import { Provider } from 'react-redux';
import { TabProvider } from './context/TabContext';
import { SocketProvider } from './context/SocketContext';
import { AlarmProvider } from './context/AlarmContext';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  // </React.StrictMode>
  <Provider store={store}>
    <TabProvider>
      <AlarmProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AlarmProvider>
    </TabProvider>
  </Provider>
);
