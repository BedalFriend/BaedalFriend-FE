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
  dsn: 'https://e6aed16528b74f7fb83d5ae8914b0e6f@o4504263565312000.ingest.sentry.io/4504263568523264',
  integrations: [new BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
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
