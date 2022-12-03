import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/config/ConfigStore';
import { Provider } from 'react-redux';
import { TabProvider } from './context/TabContext';
import { SocketProvider } from './context/SocketContext';
import { AlarmProvider } from './context/AlarmContext';

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
